package com.imageboard.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.imageboard.models.Posts;

@Repository
public interface PostRepository extends CrudRepository<Posts, Integer> {

}
