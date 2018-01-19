package com.example.demo.services;

import java.io.IOException;

import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;

import com.example.demo.models.Item;

public class UserService {
	private final String USER_URL = "";
	public Item createUser(String userStr) throws JsonParseException, JsonMappingException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		//JSON from file to Object
		//User user = mapper.readValue(new File("c:\\user.json"), User.class);

		//JSON from String to Object
		Item user = mapper.readValue(userStr, Item.class);
		return user;
	}
	
	
}
