import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { NavbarComponent } from './component/navbar/navbar.component';
import { TrackerComponent } from './component/tracker/tracker.component';
import { StatetrackerComponent } from './component/statetracker/statetracker.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    NavbarComponent,
    TrackerComponent,
    StatetrackerComponent
  ]
})
export class HomePageModule {}
