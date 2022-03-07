import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overall-score',
  templateUrl: './overall-score.component.html',
  styleUrls: ['./overall-score.component.css']
})
export class OverallScoreComponent implements OnInit {

  constructor() { }

  public overall_score = 0.7;
  public overall_sentiment = 'POSITIVE';

  ngOnInit(): void {
  }

}
