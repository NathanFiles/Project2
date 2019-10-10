package com.imageboard.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.imageboard.models.Threads;

@Repository
public interface ThreadRepository extends CrudRepository<Threads, Integer>, JpaRepository<Threads, Integer>  {
    List<Threads> findAllByOrderByTidDesc();

}
