package com.example.demo.services.storage;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.util.stream.Stream;

public class StorageService {

    public void init() {};

    public void store(MultipartFile file) {
        try {
        	String fileName = "C:\\Users\\rakes\\tarkol_data\\"+file.getOriginalFilename(); 
        	System.out.println("Saving file" + fileName);
        	
        	File fi = new File(fileName);
        	file.transferTo(fi);
			System.out.println("Saved data");
		} catch (IllegalStateException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    };

    public Stream<Path> loadAll(){return null;};

    Path load(String filename) {return new File(filename).toPath();};

    public Resource loadAsResource(String filename) {
    	 return new FileSystemResource(filename);
    	
    };

    public void deleteAll() {};

}