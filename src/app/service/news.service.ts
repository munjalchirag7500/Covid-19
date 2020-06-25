import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public http :HttpClient) { }

  fetchToday(){
    
    return this.http.get('https://newsapi.org/v2/everything?q=covid&apiKey=d9e19540ddf74cbc913c5fd987237afc')
  }
}
