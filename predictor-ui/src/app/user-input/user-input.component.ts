import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  @Output('commodityChanged') public commodityChanged: EventEmitter<string> = new EventEmitter<string>();

  public commodity: string;

  constructor() { }

  ngOnInit(): void {
  }

  public onCommodityChanged() {
    this.commodityChanged.emit(this.commodity);
  }

}
