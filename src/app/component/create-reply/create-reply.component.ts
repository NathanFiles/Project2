import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-reply',
  templateUrl: './create-reply.component.html',
  styleUrls: ['./create-reply.component.css']
})
export class CreateReplyComponent implements OnInit {

  Picture : File;
  replyText : string;
  constructor() { }

  ngOnInit() {
  }

}
