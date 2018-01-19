package com.example.demo.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.models.Topic;

@Service
public class TopicService {
	private ArrayList<Topic>topics = new ArrayList<>( Arrays.asList(
			new Topic("1","Java","Java 8 course"),
			new Topic("2","C++","C++ course"),
			new Topic("3","Python","Python course")
			));
	
	public List<Topic> getAll() {
		return 	topics;
	}
	
	public Topic getTopic(String id) {
		System.out.println(id);
		try {
			return topics.stream().filter(e->e.getId().equals(id)).findFirst().get();
		}catch(Exception e) {
				return null;
			}
	}

	public void addTopic(Topic topic) {
		topics.add(topic);		
	}
}
