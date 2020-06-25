import { Component, OnInit } from '@angular/core';
import { LivetrackerService } from 'src/app/service/livetracker.service';


@Component({
  selector: 'app-statetracker',
  templateUrl: './statetracker.component.html',
  styleUrls: ['./statetracker.component.scss'],
})
export class StatetrackerComponent implements OnInit {
  panelOpenState = false;
  stateData;
  districtData;
  resdata:[];
  showd=false;
  StateCode=null;
  constructor(public cser:LivetrackerService) { }

  ngOnInit() {

    this.cser.fetchlive().subscribe(res=>{
      this.stateData=res['statewise'];
      this.resdata=this.stateData;
      this.resdata.shift();
    })
  }
  showDistrict(value){
    this.showd=!this.showd;
    if(this.showd){
      this.StateCode=value;
    }
    else{
      this.StateCode=null;
    }
    
  }
}

