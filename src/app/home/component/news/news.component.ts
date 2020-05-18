import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {

    newsdata;
    resData:[];

  constructor(public nser:NewsService) { }

  ngOnInit() {
    this.nser.fetchToday().subscribe(res=>{
     
      this.newsdata=res['articles'];
      this.resData=this.newsdata;
      console.log(this.resData);

    })
  }

}
