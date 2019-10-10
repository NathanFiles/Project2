import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/service/post.service';
import { post } from 'src/app/model/post';
import { ThreadService } from 'src/app/service/thread.service';
import { thread } from 'src/app/model/thread';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor(private postservice :PostService) { }
  
  threadformon: boolean = false;
  openThreadForm() { this.threadformon=true; }

  activeheaders :post[] = [];

  ngOnInit() {
    this.postservice.getThreadHeaders().subscribe(
      (response) => {
        console.log(response);
        this.activeheaders=response;
      },
      () => {
        console.log("No headers found");
      }
    );

  }


}
