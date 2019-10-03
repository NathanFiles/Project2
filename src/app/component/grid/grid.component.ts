import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  arrayofthreads :string[] = ['https://i.imgur.com/bTlpaDe.png', 'https://i.imgur.com/2iwJVyc.png', 'https://i.imgur.com/9JTINof.png'];

  constructor() { }

  ngOnInit() {
  }



}
