package com.example.demo.services.storage;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import com.amazonaws.AmazonClientException;
import com.amazonaws.AmazonServiceException;
import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.auth.profile.ProfileCredentialsProvider;
import com.amazonaws.services.glacier.model.ListJobsResult;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.S3ClientOptions;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.services.s3.model.S3ObjectSummary;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.file.Path;
import java.util.stream.Stream;

//
import java.io.File;
import java.io.IOException;

import com.amazonaws.AmazonClientException;
import com.amazonaws.AmazonServiceException;
import com.amazonaws.auth.profile.ProfileCredentialsProvider;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.PutObjectRequest;


import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import com.amazonaws.auth.profile.ProfileCredentialsProvider;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.AbortMultipartUploadRequest;
import com.amazonaws.services.s3.model.CompleteMultipartUploadRequest;
import com.amazonaws.services.s3.model.GetObjectRequest;
import com.amazonaws.services.s3.model.InitiateMultipartUploadRequest;
import com.amazonaws.services.s3.model.InitiateMultipartUploadResult;
import com.amazonaws.services.s3.model.ListObjectsRequest;
import com.amazonaws.services.s3.model.ObjectListing;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PartETag;
import com.amazonaws.services.s3.model.UploadPartRequest;

@Service
public class StorageService {

    public void init() {};

    public void store(MultipartFile file) {
        try {
        	String fileName = "C:\\Users\\rakes\\tarkol_data\\"+file.getOriginalFilename(); 
        	System.out.println("Saving file" + fileName);
        	
        	File fi = new File(fileName);
        	file.transferTo(fi);
			System.out.println("Saved data");
		} catch (IllegalStateException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    };

    public Stream<Path> loadAll(){return null;};

    Path load(String filename) {return new File(filename).toPath();};

    public Resource loadAsResource(String filename) {
    	 return new FileSystemResource(filename);
    	
    };

    public void deleteAll() {};


	private static String bucketName     = "tarkol.com.uploads"; //"*** Provide bucket name ***";
	private static String AWSAccessKeyId = "";
	private static String AWSSecretKey = "";
	
	//private static String uploadFileName = ""; //"*** Provide file name ***";
	
	public boolean  saveToAWS(MultipartFile uploadFile){
		
		
		//
		//String fileName = "C:\\Users\\rakes\\tarkol_data\\" +uploadFile.getOriginalFilename(); 
		String fileName = "/tmp/" +uploadFile.getOriginalFilename(); 
		
		System.out.println("Saving file " + fileName);
    	
    	File fi = new File(fileName);
    	try {
			uploadFile.transferTo(fi);
			System.out.println("Saved " + fileName);
		} catch (IllegalStateException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		} catch (IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		//
    	
    	AWSCredentials credentials = new BasicAWSCredentials(
    			AWSAccessKeyId, 
    			AWSSecretKey);
    	
    	//AmazonS3 s3client = new AmazonS3Client(new ProfileCredentialsProvider());
    	AmazonS3 s3client = new AmazonS3Client(credentials);
    	//s3client.setS3ClientOptions();
        try {
            System.out.println("Uploading a new object to S3 from a file\n");
          //  File file = new File(uploadFile.getName());
          //  uploadFile.transferTo(file);
            
            
            s3client.putObject(new PutObjectRequest(
            		                 bucketName, fi.getName(), fi));
            new PutObjectRequest(
	                 bucketName, AWSAccessKeyId, fi);
            
            return true;

         } catch (AmazonServiceException ase) {
            System.out.println("Caught an AmazonServiceException, which " +
            		"means your request made it " +
                    "to Amazon S3, but was rejected with an error response" +
                    " for some reason.");
            System.out.println("Error Message:    " + ase.getMessage());
            System.out.println("HTTP Status Code: " + ase.getStatusCode());
            System.out.println("AWS Error Code:   " + ase.getErrorCode());
            System.out.println("Error Type:       " + ase.getErrorType());
            System.out.println("Request ID:       " + ase.getRequestId());
        } catch (AmazonClientException ace) {
            System.out.println("Caught an AmazonClientException, which " +
            		"means the client encountered " +
                    "an internal error while trying to " +
                    "communicate with S3, " +
                    "such as not being able to access the network.");
            System.out.println("Error Message: " + ace.getMessage());
        }/*catch(IOException e) {
        	System.out.println("Error occured while creating file");
        	System.out.println(e.getMessage());
        }*/
		
		
		///
        //String existingBucketName  = "*** Provide-Your-Existing-BucketName ***"; 
        //String keyName             = "*** Provide-Key-Name ***";
       		///
		
        return false;
    }

	
	public boolean save2AWS2(MultipartFile uploadFile) {
		 	String filePath  =  "C:\\Users\\rakes\\tarkol_data\\" + uploadFile.getName();//"*** Provide-File-Path ***";   
	        
	        AWSCredentials credentials = new BasicAWSCredentials(
	    			AWSAccessKeyId, 
	    			AWSSecretKey);
	        AmazonS3 s3Client = new AmazonS3Client(credentials);        

	        // Create a list of UploadPartResponse objects. You get one of these
	        // for each part upload.
	        List<PartETag> partETags = new ArrayList<PartETag>();

	        // Step 1: Initialize.
	        
	        //AWSAccessKeyId, 
			//AWSSecretKey
	        InitiateMultipartUploadRequest initRequest = new 
	             InitiateMultipartUploadRequest(bucketName, AWSAccessKeyId);
	        
	        InitiateMultipartUploadResult initResponse = 
	        	                   s3Client.initiateMultipartUpload(initRequest);

	        File file = new File(filePath);
	        long contentLength = file.length();
	        long partSize = 5242880; // Set part size to 5 MB.

	        try {
	            // Step 2: Upload parts.
	            long filePosition = 0;
	            for (int i = 1; filePosition < contentLength; i++) {
	                // Last part can be less than 5 MB. Adjust part size.
	            	partSize = Math.min(partSize, (contentLength - filePosition));
	            	
	                // Create request to upload a part.
	                UploadPartRequest uploadRequest = new UploadPartRequest()
	                    .withBucketName(bucketName).withKey(AWSAccessKeyId)
	                    .withUploadId(initResponse.getUploadId()).withPartNumber(i)
	                    .withFileOffset(filePosition)
	                    .withFile(file)
	                    .withPartSize(partSize);

	                // Upload part and add response to our list.
	                partETags.add(
	                		s3Client.uploadPart(uploadRequest).getPartETag());

	                filePosition += partSize;
	            }

	            // Step 3: Complete.
	            CompleteMultipartUploadRequest compRequest = new 
	                         CompleteMultipartUploadRequest(
	                        		 bucketName, 
	                        		 AWSAccessKeyId, 
	                                    initResponse.getUploadId(), 
	                                    partETags);

	            s3Client.completeMultipartUpload(compRequest);
	        } catch (Exception e) {
	            s3Client.abortMultipartUpload(new AbortMultipartUploadRequest(
	            		bucketName, AWSAccessKeyId, initResponse.getUploadId()));
	        }
			
	        return false;
	}
	
	public List<String> getFileList(String bucket, String user){
		
		//
		String AWSAccessKeyId = "AKIAJE5O35UQ5TEY2RTA";
		String AWSSecretKey = "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";
		AWSCredentials credentials = new BasicAWSCredentials(
    			AWSAccessKeyId, 
    			AWSSecretKey);
    	
    	//AmazonS3 s3client = new AmazonS3Client(new ProfileCredentialsProvider());
    	AmazonS3 s3client = new AmazonS3Client(credentials);
		
		//
		
		//AmazonS3 s3client = new AmazonS3Client(new ProfileCredentialsProvider());        
		List<String> files = new ArrayList();
		
		ListObjectsRequest listObjectsRequest = new ListObjectsRequest()
		.withBucketName(bucketName);
		//.withPrefix("myprefix");
		ObjectListing objectListing;

		do {
		    objectListing = s3client.listObjects(listObjectsRequest);
		    for (S3ObjectSummary objectSummary : 
		        objectListing.getObjectSummaries()) {
		        // write to file with e.g. a bufferedWriter
		        files.add(objectSummary.getKey());
		    }
		    listObjectsRequest.setMarker(objectListing.getNextMarker());
		} while (objectListing.isTruncated());
		return files;
	}
	
	public void readFromAWSS3(String file) {
		System.out.println("File to read " + file);
		AmazonS3  s3 = new AmazonS3Client(new BasicAWSCredentials(AWSAccessKeyId, AWSSecretKey));
		S3Object s3object = s3.getObject(new GetObjectRequest(
	            bucketName, file));
	    System.out.println(s3object.getObjectMetadata().getContentType());
	    System.out.println(s3object.getObjectMetadata().getContentLength());

	    BufferedReader reader = new BufferedReader(new InputStreamReader(s3object.getObjectContent()));
	    String line;
	    try {
			while((line = reader.readLine()) != null) {
			  // can copy the content locally as well
			  // using a buffered writer
			  System.out.println(line);
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public SseEmitter streamerAwsS3File(String file){
		final SseEmitter emitter = new SseEmitter();
		ExecutorService service = Executors.newSingleThreadExecutor();
        service.execute(() -> {
           try{

        	System.out.println("File to read " + file);
       		AmazonS3  s3 = new AmazonS3Client(new BasicAWSCredentials(AWSAccessKeyId, AWSSecretKey));
       		S3Object s3object = s3.getObject(new GetObjectRequest(
       	            bucketName, file));
       	    System.out.println(s3object.getObjectMetadata().getContentType());
       	    System.out.println(s3object.getObjectMetadata().getContentLength());

       	    BufferedReader reader = new BufferedReader(new InputStreamReader(s3object.getObjectContent()));
       	    String line;
    		    
    		    emitter.send("\r\n" + 
    		    		"retry:1000000\n");
    		  while ((line = reader.readLine()) != null){
    		     emitter.send(line , MediaType.TEXT_PLAIN);
    		        		     
    		    }
    		    reader.close();
    		    System.out.println("Closing the connection");
    		    emitter.send("\r\n" + 
    		    		"event:close\n");
    		  }
    		  catch (Exception e){
    		    System.err.format("Exception occurred trying to read '%s'.", file);
    		    System.out.println("Closing the connection");
    		    e.printStackTrace();
    		    try {
					emitter.send("\r\n" + 
							"event:close\n");
				} catch (IOException e1) {
					e1.printStackTrace();
				}
    		  }
    		emitter.complete();
        });
        
        return emitter;
	}


}