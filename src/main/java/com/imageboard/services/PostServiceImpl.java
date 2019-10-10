package com.imageboard.services;

import java.io.IOException;
import java.util.ArrayList;
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
import com.imageboard.models.Threads;
import com.imageboard.repositories.PostRepository;
import org.springframework.data.domain.Sort;


@Service
public class PostServiceImpl implements PostService {

	@Autowired
	PostRepository pr;
	
	@Autowired
	ThreadService ts;
	
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
		return (List<Posts>) pr.findAllByOrderByPidDesc();
	}
	
	@Override
	public List<Posts> getReplies(int id) {
		List<Posts> posts = (List<Posts>) pr.findAllByOrderByPidDesc();
		List<Posts> replies = new ArrayList<Posts>();
		for (int i=0; i<posts.size(); i++) {
			if (posts.get(i).getParent_id()==id) {
				replies.add(posts.get(i));
			}
		}
		return replies;
	}
	
	@Override
	public List<Posts> getHeaderPosts() {
		List<Posts> posts = (List<Posts>) pr.findAllByOrderByPidDesc();
		List<Posts> headers = new ArrayList<Posts>();
		for (int i=0; i<posts.size(); i++) {
			if (posts.get(i).getParent_id()==0) {
				headers.add(posts.get(i));
			}
		}
		return headers;
	}
	
	@Override
	public List<Posts> getActiveHeaders() {
		List<Threads> activethreads = (List<Threads>) ts.activeThreads();
		List<Posts> allheaders = getHeaderPosts();
		List<Posts> activeheaders = new ArrayList<Posts>();
		for (int i=0; i<allheaders.size(); i++) {
			for (int j=0; j<activethreads.size(); j++) {
				if (allheaders.get(i).getT_id()==activethreads.get(j).getT_id()) {
					activeheaders.add(allheaders.get(i));
				}
			}
		}
		return activeheaders;
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
			md.setContentLength(file.getSize());
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
