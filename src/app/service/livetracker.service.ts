import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivetrackerService {

  constructor(public http :HttpClient) { }

  fetchLiveUpdate(){
    return this.http.get('https://api.covid19india.org/v2/state_district_wise.json');
  }

  fetchlive(){
    return this.http.get('https://api.covid19india.org/data.json');
  }
}
