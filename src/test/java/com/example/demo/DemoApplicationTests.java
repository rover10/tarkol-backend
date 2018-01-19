package com.example.demo;


import java.util.List;
import java.util.concurrent.ConcurrentHashMap;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.example.demo.models.ItemBrief;
import com.example.demo.services.ItemService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DemoApplicationTests {

	@Test
	public void contextLoads() {
		System.out.println("------------>");
		System.out.println("------------>");
		System.out.println("------------>");
		System.out.println("Load test .. construct the news in memory.");
		
		ItemService ic = new ItemService(new ConcurrentHashMap<String, List<Integer>>(), new ConcurrentHashMap<Integer,List<ItemBrief>>());
		ic.buildMap();
		ic.getItemCategorization();
		System.out.println("Map size = "+ic.getItemCategorization().size());
		System.out.println("--------------------------------------------------");
		ic.printFilteredItems();
		System.out.println("--------------------------------------------------");
		
		//ic.getTopItems(1160418111, 1172164181, "story");
		
		System.out.println("------------------Top Items-----------------------");
		ic.printItems(ic.getTopItems(1200607720, 1201119120, "story"));
		
	}

}
