import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  constructor(private router :Router, private postservice :PostService) { }


  ngOnInit() {
    // console.log(this.threadservice.threads);
    // console.log(this.threadservice.posts);
    // console.log(this.threadservice.threadnum);
  }

}
