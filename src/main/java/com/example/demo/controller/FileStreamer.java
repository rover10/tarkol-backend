package com.example.demo.controller;

import java.time.LocalTime;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.ResponseBodyEmitter;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import com.example.demo.models.FileInfo;
import com.example.demo.services.FileService;

@RestController
public class FileStreamer {
	@Autowired
	FileService fileReader;
	
	 @RequestMapping("/api/sseTest")
	    public ResponseBodyEmitter handleRequest () {
		 	System.out.println("Request initiated!");
	        final SseEmitter emitter = new SseEmitter();
	        
	        ExecutorService service = Executors.newSingleThreadExecutor();
	        service.execute(() -> {
	            for (int i = 0; i < 500; i++) {
	                try {
	                    emitter.send(LocalTime.now().toString() , MediaType.TEXT_PLAIN);

	                    Thread.sleep(1000);
	                } catch (Exception e) {
	                    e.printStackTrace();
	                    emitter.completeWithError(e);
	                    return;
	                }
	            }
	            emitter.complete();
	        });

	        return emitter;
	    }

	 @RequestMapping("/api/stream/file/")
	    public ResponseBodyEmitter streamFile (@ModelAttribute FileInfo fileInfo) {
		 	System.out.println("Streaming request initiated!");
		 	System.out.println("File : " + fileInfo.getFileName());
		 	System.out.println("User : " + fileInfo.getUser());
		 	return this.fileReader.fileStreamer(fileInfo.getFileName());
	    }
	 
}
