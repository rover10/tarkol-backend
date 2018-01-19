package com.example.demo.services;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;
import com.example.demo.models.News;


@Service
public class NewsService {
	private ArrayList<News>news = new ArrayList<>( Arrays.asList());
	
	public List<News> getAll() {
		return 	this.news;
	}
	
	public News getNews(Integer id) {
		System.out.println(id);
		try {
			return this.news.stream().filter(e->e.getId().equals(id)).findFirst().get();
		}catch(Exception e) {
				return null;
			}
	}

	public void addNews(News news) {
		this.news.add(news);		
	}
	
	public void collectNews(String url) throws IOException {
			
			URL obj = new URL(url);
			HttpURLConnection con = (HttpURLConnection) obj.openConnection();

			con.setRequestMethod("GET");
			con.setRequestProperty("User-Agent", "");

			int responseCode = con.getResponseCode();
			System.out.println("\nSending 'GET' request to URL : " + url);
			System.out.println("Response Code : " + responseCode);

			BufferedReader in = new BufferedReader(
			        new InputStreamReader(con.getInputStream()));
			String inputLine;
			StringBuffer response = new StringBuffer();

			while ((inputLine = in.readLine()) != null) {
				response.append(inputLine);
			}
			
			in.close();
			System.out.println(response.toString());

		}

}
