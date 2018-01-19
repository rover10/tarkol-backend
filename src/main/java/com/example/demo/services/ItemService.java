package com.example.demo.services;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.Callable;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.function.Predicate;
import java.util.stream.IntStream;
import java.util.stream.LongStream;

import org.springframework.stereotype.Service;

import com.example.demo.models.Item;
import com.example.demo.models.ItemBrief;
import com.example.demo.models.Search;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class ItemService {
	
	private Map<String, List<Integer>> itemCategorization;
	private Map<Integer, List<ItemBrief>> allFilteredItems;
	private String sourceUrl;
	
	AtomicInteger atomicInt = new AtomicInteger(0);
	
	private final String ITEM_URI = "https://hacker-news.firebaseio.com/v0/item/";
	private final String FORMAT =".json";
	private final long NO_OF_ITEMS_TO_PROCESS = 5L;
	private final long FIRST_ITEM_ID = 100000L; 
	private final String STORY = "story";
	private final long SEC_IN_A_DAY = 3600;
	private final int TOP = 50; 
	// First Item-> https://hacker-news.firebaseio.com/v0/item/1.json <- Give us base EPOC 
	// {"by":"pg","descendants":15,"id":1,"kids":[487171,15,234509,454410,82729],
	// "score":61,"time":1160418111,"title":"Y Combinator","type":"story","url":"http://ycombinator.com"}
	private final long BASE_EPOC = 1160418111;
	
	private final Predicate<Item> filterStories =(e)->{ 
		if(e.getType() !=null  && e.getType().equals("story") )
			return true;
		return false;
		};
	
	public ItemService(Map<String, List<Integer>> itemCategorization, Map<Integer,List<ItemBrief>> allFilteredItems) {
		this.itemCategorization = itemCategorization;
		this.allFilteredItems = allFilteredItems;
		buildMap();
	}
	
	public ItemService() {
		this.itemCategorization = new ConcurrentHashMap<String, List<Integer>>();
		this.allFilteredItems = new ConcurrentHashMap<Integer,List<ItemBrief>>();
		buildMap();
	}
	
	Callable<String> readItem(String url) {
	    return () -> {
	    	URL obj = new URL(url);
			HttpURLConnection con = (HttpURLConnection) obj.openConnection();

			con.setRequestMethod("GET");
			con.setRequestProperty("User-Agent", "");

			int responseCode = con.getResponseCode();
			System.out.println("\n'GET' " + url);
			System.out.println("STATUS: " + responseCode);

			BufferedReader in = new BufferedReader(
			        new InputStreamReader(con.getInputStream()));
			String inputLine;
			StringBuffer response = new StringBuffer();

			while ((inputLine = in.readLine()) != null) {
				response.append(inputLine);
			}
			
			in.close();
			Item item = ItemService.generateItem(response);
			addItem(item);
			addToBriefItem(item, filterStories);
			return response.toString();
	    };
	}
	
	private void addToBriefItem(Item item, Predicate<Item> filterStories2) {
		
		System.out.println("FILTERING ITEMS 0");
		if(item.getType() !=null  && item.getType().equals(STORY) && item.getScore() > TOP ) {
			System.out.println("FILTERING ITEMS 1");
			ItemBrief itemBrief = new ItemBrief();
			itemBrief.setBy(item.getBy());
			itemBrief.setId(item.getId());
			itemBrief.setScore(item.getScore());
			itemBrief.setTime(item.getTime());
			itemBrief.setTitle(item.getTitle());
			itemBrief.setType(item.getType());
			itemBrief.setUrl(item.getUrl());
			
			/*Insertion logic in the list*/
			
			// Map Time -> days which act as --> index in the list
			// if index exit  -> add the briefItem to list @that index
			// else create a new list at that index and add the briefItem to the List
			
			
			/*Fetch Logic from the list */
			// getTime range(Start && end ) -> day
			// Iterate the list starting from start to end range
			
			
			//this.allFilteredItems.add(itemBrief);
			int itemPostDay =(int) convertTimeToDay(item.getTime());
			if(allFilteredItems.size() <= itemPostDay) {
				System.out.println("FILTERING ITEMS 2 " );
				System.out.println("FILTERING ITEMS 2 " + allFilteredItems.get(itemPostDay));
				if(allFilteredItems.get(itemPostDay) != null ) {
					System.out.println("FILTERING ITEMS 3");
					allFilteredItems.get(itemPostDay).add(itemBrief);
				}else {
					System.out.println("FILTERING ITEMS 4");
					insertInFileredItem(itemPostDay, allFilteredItems, itemBrief);
				}
			}else {
				System.out.println("FILTERING ITEMS 5");
				insertInFileredItem(itemPostDay, allFilteredItems, itemBrief);
			}
		}
			
		
	}
	
	private void insertInFileredItem(int itemPostDay, Map<Integer,List<ItemBrief>> allFilteredItems, ItemBrief itemBrief) {
		List<ItemBrief> briefItemList = new ArrayList<ItemBrief>();
		briefItemList.add(itemBrief);
		allFilteredItems.put(itemPostDay, briefItemList);
	}
	
	private long convertTimeToDay(long time) {
		// EPOC Converter https://www.epochconverter.com/
		
		// Sample test https://hacker-news.firebaseio.com/v0/item/1734.json
		
		// {"by":"jwecker","descendants":0,"id":1734,"score":2,"time":1172767536,"title":
		// "Starting a Company is a Crap Sandwich","type":"story","url":
		// "http://www.gobignetwork.com/wil/2007/2/21/starting-a-company-is-a-crap-sandwich/10108/view.aspx"}
		
		// Search on hackernews
		// https://hn.algolia.com/?query=Starting%20a%20Company%20is%20a%20Crap%20Sandwich&sort=byPopularity&prefix&page=0&dateRange=all&type=story
		
		
		//baseTime = The timestamp of the first item created
		// first item -> https://hacker-news.firebaseio.com/v0/item/1.json
		// Make a call to first item and set baseTime
		// total seconds in one day SEC_IN_A_DAY= 3600 
		// day--> index--> (ITEM_EPOC - BASE_EPOC)/SEC_IN_A_DAY
		//long bucketIndex =  (time - BASE_EPOC)/SEC_IN_A_DAY;
		
		return (time - BASE_EPOC)/SEC_IN_A_DAY;
		
	}

	private static Item generateItem(StringBuffer response) throws JsonParseException, JsonMappingException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		Item item = mapper.readValue(response.toString(), Item.class);
		//System.out.println("Item created!");
		return item;
	}

	private void addItem(Item item) {
		
		if(item == null)
			return;
		
		List<Integer> type = this.itemCategorization.get(item.getType());
		if(type == null) {
			this.itemCategorization.put(item.getType(), new ArrayList<Integer>());
			this.itemCategorization.get(item.getType()).add(item.getId());
		}else {
			this.itemCategorization.get(item.getType()).add(item.getId());
		}
		
		System.out.println("Adding item -> Id -> "+ item.getId() + " Title -> " + item.getTitle());
	}
	public String getSourceUrl() {
		return sourceUrl;
	}

	public void setSourceUrl(String sourceUrl) {
		this.sourceUrl = sourceUrl;
	}

	public Map<String, List<Integer>> getItemCategorization() {
		return itemCategorization;
	}

	public void setItemCategorization(Map<String, List<Integer>> itemCategorization) {
		this.itemCategorization = itemCategorization;
	}


	
	public void buildMap() {
		ExecutorService executor = Executors.newFixedThreadPool(10);
		LongStream.range(FIRST_ITEM_ID, FIRST_ITEM_ID+NO_OF_ITEMS_TO_PROCESS)
	    		  .forEach(i -> { executor.submit(readItem(ITEM_URI+i+FORMAT));
	    });
		
		try {
			executor.shutdown();
			executor.awaitTermination(1000, TimeUnit.MINUTES);
			System.out.println("Printing map ");
			printMap(this.itemCategorization);
		} catch (InterruptedException e) {
			System.out.println("Error occured while processing..");
			e.printStackTrace();
		}
		
	}
	
	void printMap(Map<String, List<Integer>> itemCategorization){
		itemCategorization.forEach((k,v)->{System.out.println("Key = "+ k + " Value "+v);});
	} 
	
	public void printFilteredItems() {
		this.allFilteredItems.forEach((key, bItemList)->{
			bItemList.stream().forEach(bItem->{
				System.out.println("Day = " + key + " Id: " + bItem.getId() + " Title: " + bItem.getTitle());}
			);
		});
	}
	
	public void printItems(Map<Integer, List<ItemBrief>> items) {
		items.forEach((key, bItemList)->{
			bItemList.stream().forEach(bItem->{
				System.out.println("Day = " + key + " Id: " + bItem.getId() + " Title: " + bItem.getTitle());}
			);
		});
	}
	
	
	public Map<Integer, List<ItemBrief>> getTopItems(long start, long end, String itemType){
		int dayRangeStart = (int) convertTimeToDay(start);
		int dayRangeEnd = (int) convertTimeToDay(end);
		Map<Integer, List<ItemBrief>> topItems = new HashMap<Integer, List<ItemBrief>>();
		System.out.println("Finding Top Items: Start  " + dayRangeStart + " End: " + dayRangeEnd);
		IntStream.range(dayRangeStart, dayRangeEnd)
				 .forEach(day ->{
						if(allFilteredItems.get(day) != null) {
							topItems.put(day, allFilteredItems.get(day));
				  }
		});
		return topItems;
	}
	
	public Map<Integer, List<ItemBrief>> getTopItems(Search searchParameter){
		return getTopItems(searchParameter.getStartTime(), searchParameter.getEndTime(), searchParameter.getType());
	}
}
