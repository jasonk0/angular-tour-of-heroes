import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessageComponent } from './message/message.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroFormComponent } from './hero-form/hero-form.component';


@NgModule({
  declarations: [							
    AppComponent,
    HeroesComponent,
      HeroDetailComponent,
      MessageComponent,
      DashBoardComponent,
      HeroSearchComponent,
      HeroFormComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
       HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
