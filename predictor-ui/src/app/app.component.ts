import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public commodity: string;

  public onCommodityChanged(event: any) {
    //Make backend http call to fetch data
  }

}
