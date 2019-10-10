import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-create-reply',
  templateUrl: './create-reply.component.html',
  styleUrls: ['./create-reply.component.css']
})
export class CreateReplyComponent implements OnInit {

  flag : boolean = false;
  date : string;
  t_id : string = "1";
  parent_id : string = "5";
  name : string;
  picture : File = null;
  replyText : string;
  timeStamp : string = "OCT 06, 2019";

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

    onSelected(event){
      this.picture = <File> event.target.files[0];
    }
  
    postReply(){
      this.replyText = "";
      this.picture = null;
    }
}
