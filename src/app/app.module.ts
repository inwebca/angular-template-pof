import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SurveyComponent } from './survey-component/survey.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SurveyComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
