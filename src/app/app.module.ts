import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { GeneralComponent } from './features/general/general.component';
import { RedditComponent } from './features/reddit/reddit.component';
import { EntertainmentComponent } from './features/entertainment/entertainment.component';
import { EducationComponent } from './features/education/education.component';
import { WelcomeComponent } from './features/welcome/welcome.component';



@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    RedditComponent,
    EntertainmentComponent,
    EducationComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
