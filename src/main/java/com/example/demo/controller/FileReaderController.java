package com.example.demo.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.FileInfo;
import com.example.demo.services.FileService;

@RestController
public class FileReaderController {
	@Autowired
	FileService fileReader;
	
	@RequestMapping("/read")
	public List<String> readFile(@ModelAttribute FileInfo fileInfo) {
		System.err.println("Requested File " + fileInfo.getFileName());
		System.err.println("Requested by " + fileInfo.getUser());
		return fileReader.getFileContent(fileInfo.getFileName());
		
	}
}
