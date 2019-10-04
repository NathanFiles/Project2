package com.imageboard.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.imageboard.models.Threads;

@Repository
public interface ThreadRepository extends CrudRepository<Threads, Integer> {

}
