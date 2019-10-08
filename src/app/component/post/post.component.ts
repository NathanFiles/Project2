import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetThreadService } from 'src/app/service/get-thread.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  constructor(private router :Router, private threadservice :GetThreadService) { }

  ngOnInit() {
    console.log(this.threadservice.threads);
    console.log(this.threadservice.posts);
  }

}
