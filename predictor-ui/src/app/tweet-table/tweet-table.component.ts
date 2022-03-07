import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet-table',
  templateUrl: './tweet-table.component.html',
  styleUrls: ['./tweet-table.component.css']
})
export class TweetTableComponent implements OnInit {

  constructor() { }

  public displayedColumns = ['source', 'sentiment', 'score'];

  public dataSource: any[] = [{
    source: 'New York Times',
    sentiment: 'POSITIVE',
    score: 0.9,
  }, {
    source: 'NY',
    sentiment: 'NEGATIVE',
    score: 0.76,
  }, {
    source: 'Test2',
    sentiment: 'POSITIVE',
    score: 0.8,
  }, {
    source: 'T',
    sentiment: 'NEGATIVE',
    score: 0.66,
  }]

  ngOnInit(): void {
  }

}
