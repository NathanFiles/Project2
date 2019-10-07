package com.imageboard.services;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.SdkClientException;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.imageboard.models.Posts;
import com.imageboard.repositories.PostRepository;

@Service
public class PostServiceImpl implements PostService {

	@Autowired
	PostRepository pr;
	
	@Autowired
	private AmazonS3 s3client;
	
	@Value("${project2.s3.bucket}")
	private String bucket;
	
	@Override
	public Posts addPost(Posts b) {
		return pr.save(b);
	}

	@Override
	public Posts getPost(int id) {
		return pr.findById(id).get();
	}
	
	@Override
	public List<Posts> allPosts() {
		return (List<Posts>) pr.findAll();
	}

	@Override
	public Posts updatePost(Posts b) {
		return pr.save(b);
	}

	@Override
	public boolean deletePost(Posts b) {
		pr.delete(b);
		return true;
	}

	@Override
	public boolean uploadImage(String keyName, MultipartFile file) {
		
		try {
			ObjectMetadata md = new ObjectMetadata();
			s3client.putObject(bucket, keyName, file.getInputStream(), md);
			return true;
		} catch (AmazonServiceException e) {
			e.printStackTrace();
		} catch (SdkClientException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return false;
		
	}

}
