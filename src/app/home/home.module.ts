import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { NgpSortModule } from "ngp-sort-pipe";
import { HomePageRoutingModule } from './home-routing.module';
import { NavbarComponent } from './component/navbar/navbar.component';
import { TrackerComponent } from './component/tracker/tracker.component';
import { StatetrackerComponent } from './component/statetracker/statetracker.component';
import { NewsComponent } from './component/news/news.component';

import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { TweetsComponent } from './component/tweets/tweets.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgpSortModule,
    NgxTwitterTimelineModule
    
  ],
  declarations: [
    HomePage,
    NavbarComponent,
    TrackerComponent,
    StatetrackerComponent,NewsComponent,TweetsComponent
  ]
})
export class HomePageModule {}
