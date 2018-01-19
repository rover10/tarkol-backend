package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Topic;
import com.example.demo.services.TopicService;

@RestController
public class TopicController {
	@Autowired
	TopicService topicService;
	
	@RequestMapping(path = "/topics")
	public List<Topic>getAll(){
		return topicService.getAll();
	}
	
	@RequestMapping(path ="/topics/{id}",produces=MediaType.APPLICATION_JSON_VALUE)
	public Topic getTopic(@PathVariable String id) {
		return topicService.getTopic(id);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/topics" ,produces=MediaType.APPLICATION_JSON_VALUE)
	public void saveTopic(@RequestBody Topic topic) {
		topicService.addTopic(topic);
	}
	
}
