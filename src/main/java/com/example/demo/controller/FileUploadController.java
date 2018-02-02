package com.example.demo.controller;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.services.storage.StorageService;

@RestController
public class FileUploadController {
	private final StorageService storageService = new StorageService();
	

	
	@GetMapping("/api/files/{filename:.+}")
    @ResponseBody
    public ResponseEntity<Resource> serveFile(@PathVariable String filename) {

        Resource file = storageService.loadAsResource(filename);
        return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION,
                "attachment; filename=\"" + file.getFilename() + "\"").body(file);
    }
	
	/*
	@PostMapping("/files")
    public String handleFileUpload(@RequestParam("file") MultipartFile file,
            RedirectAttributes redirectAttributes) {

        storageService.store(file);
        System.out.println("Request received " + file.getOriginalFilename());
        redirectAttributes.addFlashAttribute("message",
                "You successfully uploaded " + file.getOriginalFilename() + "!");

        return "['Uploaded!']";
    }
	*/
	
	@RequestMapping(value = "/api/files", method = RequestMethod.POST,consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public String uploadFile(@RequestPart MultipartFile file){
	    System.out.println("Request received " + file.getOriginalFilename());
		//storageService.store(file);
		storageService.saveToAWS(file); 
		//storageService.save2AWS2(file); 
		return "{success: 'success'}";
	    //return file.getOriginalFilename();
	}
	
/*	@RequestMapping(method=RequestMethod.POST, value="/" ,produces=MediaType.APPLICATION_JSON_VALUE)
	public String handleFileUpload2(@RequestParam("file") MultipartFile file) {

        storageService.store(file);
        redirectAttributes.addFlashAttribute("message",
                "You successfully uploaded " + file.getOriginalFilename() + "!");

        return "redirect:/";
    }*/
}


