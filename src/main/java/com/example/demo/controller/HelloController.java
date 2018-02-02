package com.example.demo.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Topic;
import com.example.demo.services.TopicService;

@RestController
public class HelloController {

	@Autowired
	private TopicService topicService;
	
	@RequestMapping("/api//hello")
	public String sayHello(){
		return "Hello";
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/dummyfiles" ,produces=MediaType.APPLICATION_JSON_VALUE)
	public String upload() {
		return "Uploaded!";
	}
	
	@RequestMapping("/api/all")
	public List<Topic>allTopics(){
		return topicService.getAll	(); 
	}
}