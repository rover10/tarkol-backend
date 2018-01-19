package com.example.demo.services;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;


// Test File exist
// Belongs to user 
// File is not too large
@Service
public class FileService {
	private final String path = "C:\\Users\\rakes\\tarkol_data\\"; 
	public List<String> getFileContent(String filename) {
		System.out.println("Inside file reader");
		System.out.println("File " + path+filename);
		  List<String> records = new ArrayList<String>();
		  try{
		    BufferedReader reader = new BufferedReader(new FileReader(path+filename));
		    String line;
		    while ((line = reader.readLine()) != null){
		      System.out.println(line);
		      records.add(line);
		    }
		    reader.close();
		    return records;
		  }
		  catch (Exception e){
		    System.err.format("Exception occurred trying to read '%s'.", filename);
		    e.printStackTrace();
		    return null;
		  }
		  
		  
		}
	// https://golb.hplar.ch/p/Server-Sent-Events-with-Spring
	public SseEmitter fileStreamer(String filename){
		final SseEmitter emitter = new SseEmitter();
		ExecutorService service = Executors.newSingleThreadExecutor();
        service.execute(() -> {
           try{
    		    BufferedReader reader = new BufferedReader(new FileReader(path+filename));
    		    String line;
    		    
    		    
    		    emitter.send("\r\n" + 
    		    		"retry:1000000\n");
    		  while ((line = reader.readLine()) != null){
    		     emitter.send(line , MediaType.TEXT_PLAIN);
    		        		     
    		    }
    		    reader.close();
    		    System.out.println("Closing the connection");
    		    emitter.send("\r\n" + 
    		    		"event:close\n");
    		  }
    		  catch (Exception e){
    		    System.err.format("Exception occurred trying to read '%s'.", filename);
    		    System.out.println("Closing the connection");
    		    e.printStackTrace();
    		    try {
					emitter.send("\r\n" + 
							"event:close\n");
				} catch (IOException e1) {
					e1.printStackTrace();
				}
    		  }
    		emitter.complete();
        });
        
        return emitter;
	}
}
