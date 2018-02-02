package com.example.demo.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.ResponseBodyEmitter;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import com.example.demo.models.FileInfo;
import com.example.demo.services.storage.StorageService;

@RestController
public class FileReaderController {
	@Autowired
	StorageService storageService;
	
	@RequestMapping("/api/bucket/files/")
	public List<String> readFile(@ModelAttribute FileInfo fileInfo) {
		
		storageService.getFileList("tarkol.com.uploads", "Rakesh").forEach(System.out::println);
		return storageService.getFileList("tarkol.com.uploads", "");
		
	}
	
	@RequestMapping("/api/bucket/read/file")
	public void readFile(@RequestParam("filename") String filename) {
		storageService.readFromAWSS3(filename);
	}
	
	@RequestMapping("/api/bucket/stream/file")
	public ResponseBodyEmitter streamFile(@RequestParam("filename") String filename) {
		return storageService.streamerAwsS3File(filename);
	}
	
}
