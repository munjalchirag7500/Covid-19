import { Component, OnInit, Input } from '@angular/core';
import { LivetrackerService } from 'src/app/service/livetracker.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss'],
})
export class DistrictComponent implements OnInit {
 
  @Input() StateCode;

  districtDat;
  objKeys=Object.keys;
  constructor(private lser:LivetrackerService) { }

  ngOnInit() {
   
    this.fetchDistrict();
    
  }

  fetchDistrict(){

    
    this.lser.fetchDistrict().subscribe({
      next:(res=>{
        var arr : [];
        this.districtDat=res[this.StateCode]["districtData"];
        
      })
    })

  }

}
