import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { GlobalDataSummary } from '../global-data';

@Injectable({
  providedIn: 'root'
})
export class LivetrackerService {

  constructor(public http :HttpClient) { }

  fetchLiveUpdate(){
    return this.http.get('https://api.covid19india.org/v2/state_district_wise.json');
  }

  fetchDistrict(){
    return this.http.get('https://api.covid19india.org/state_district_wise.json');
  }

  fetchlive(){
    return this.http.get('https://api.covid19india.org/data.json').pipe(
      map(result=>{
        
        let data=result
        return data;
      })
    );
  }
}
