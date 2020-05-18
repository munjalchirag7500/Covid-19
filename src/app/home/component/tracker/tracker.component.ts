import { Component, OnInit } from '@angular/core';
import { LivetrackerService } from 'src/app/service/livetracker.service';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss'],
})
export class TrackerComponent implements OnInit {
caseStudies;
  constructor(private tser:LivetrackerService) { }

  ngOnInit() {

    this.tser.fetchlive().subscribe(res=>{
      this.caseStudies=res['cases_time_series'];
      this.caseStudies=this.caseStudies[this.caseStudies.length-1];
      
    })
  }

}
