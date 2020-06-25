import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public http :HttpClient) { }

  fetchToday(){
    
    return this.http.get('http://newsapi.org/v2/everything?q=covid&apiKey=508ffe06166945cf81ced455524e74c7')
  }
}
