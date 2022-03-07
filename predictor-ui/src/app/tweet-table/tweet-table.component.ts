import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet-table',
  templateUrl: './tweet-table.component.html',
  styleUrls: ['./tweet-table.component.css']
})
export class TweetTableComponent implements OnInit {

  constructor() { }

  public displayedColumns = ['source', 'sentiment', 'score'];

  public dataSource: any[] = []

  ngOnInit(): void {
  }

}
