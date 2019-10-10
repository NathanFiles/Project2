package com.imageboard.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.imageboard.models.Posts;

@Repository
public interface PostRepository extends CrudRepository<Posts, Integer>, JpaRepository<Posts, Integer>  {
    List<Posts> findAllByOrderByPidDesc();
}
