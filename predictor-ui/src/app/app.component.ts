import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public commodity: string;
  private request;

  public constructor(private http: HttpClient) {
    this.request = http.get('http://localhost:5000/');
  }

  public onCommodityChanged(event: any) {
    this.request.subscribe((data) => console.log(data));
  }

}
