import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThreadService } from 'src/app/service/thread.service';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  constructor(private route :ActivatedRoute, private postservice :PostService) { }
  
  ngOnInit() {
    this.route.params.subscribe( params =>  this.postservice.loadThread(params));
  }

}
