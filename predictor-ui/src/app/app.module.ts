import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TweetTableComponent } from './tweet-table/tweet-table.component';
import { UserInputComponent } from './user-input/user-input.component';
import { OverallScoreComponent } from './overall-score/overall-score.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    TweetTableComponent,
    OverallScoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    MatInputModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
