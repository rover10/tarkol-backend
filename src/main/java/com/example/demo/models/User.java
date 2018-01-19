package com.example.demo.models;

import java.util.List;

public class User {
		
	private String id;
	private long delay;
	private long created;
	private int karma;
	private String about;
	private List<Integer> submitted;
	
	public String getId() {
		return id;
	}
	
	public void setId(String id) {
		this.id = id;
	}
	
	public long getDelay() {
		return delay;
	}
	
	public void setDelay(long delay) {
		this.delay = delay;
	}
	
	public long getCreated() {
		return created;
	}
	
	public void setCreated(long created) {
		this.created = created;
	}
	
	public int getKarma() {
		return karma;
	}
	
	public void setKarma(int karma) {
		this.karma = karma;
	}
	
	public String getAbout() {
		return about;
	}
	
	public void setAbout(String about) {
		this.about = about;
	}
	
	public List<Integer> getSubmitted() {
		return submitted;
	}
	
	public void setSubmitted(List<Integer> submitted) {
		this.submitted = submitted;
	}

	
}
