package com.example.demo.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.News;
import com.example.demo.models.Topic;
import com.example.demo.services.NewsService;

@RestController
public class NewsController {
	@Autowired
	NewsService newsService;
	
	
	@RequestMapping(path = "/news")
	public List<News>getAll(){
		try {
			newsService.collectNews("https://hacker-news.firebaseio.com/v0/item/8863.json");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return newsService.getAll();
	}
	
	@RequestMapping(path ="/news/{id}",produces=MediaType.APPLICATION_JSON_VALUE)
	public News getTopic(@PathVariable String id) {
		return newsService.getNews(Integer.parseInt(id));
	}
	
}
