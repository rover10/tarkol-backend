package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.ItemBrief;
import com.example.demo.models.Search;

@RestController
public class SearchController {
	
	@RequestMapping(path = "/search/",produces=MediaType.APPLICATION_JSON_VALUE)
	public Map<Integer, List<ItemBrief>> search(@ModelAttribute Search searchParameters) {
		return null;
	}
	
}
