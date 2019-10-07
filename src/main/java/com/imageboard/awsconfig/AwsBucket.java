package com.imageboard.awsconfig;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;

@Configuration
public class AwsBucket {
	
	@Value("${project2.aws.access_key_id}")
	private String aws_access_id;

	@Value("${project2.aws.secret_access_key}")
	private String aws_secret_key;
	
	@Value("${project.s3.region}")
	private String region;
	
	@Bean
	public AmazonS3 s3() {
		
		BasicAWSCredentials awsCredentails = new BasicAWSCredentials(aws_access_id,aws_secret_key );
		AmazonS3 s3Client = AmazonS3ClientBuilder.standard().withRegion(Regions.fromName(region)).
				withCredentials(new AWSStaticCredentialsProvider(awsCredentails)).build();
		
		return s3Client;
	}
	
	
}
