import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { StatetrackerComponent } from './component/statetracker/statetracker.component';
import { NewsComponent } from './component/news/news.component';
import { TweetsComponent } from './component/tweets/tweets.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '', component: StatetrackerComponent
      },
      {
        path: 'news', component: NewsComponent
      },
      {
        path: 'tweets', component: TweetsComponent
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
