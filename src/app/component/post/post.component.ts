import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThreadService } from 'src/app/service/thread.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  constructor(private router :Router, private threadservice :ThreadService) { }


  ngOnInit() {
    // console.log(this.threadservice.threads);
    // console.log(this.threadservice.posts);
    // console.log(this.threadservice.threadnum);
  }

}
