import { Component, OnInit,ViewChild } from '@angular/core';
import { LivetrackerService } from 'src/app/service/livetracker.service';
import { GlobalDataSummary } from 'src/app/global-data';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  tooltip: any; // ApexTooltip;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss'],
})

export class TrackerComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  caseStudies  ;

  totalConfirmed :GlobalDataSummary[]=[];
  
  constructor(private tser: LivetrackerService) {
    
  }

  initChart(){
    let date = [];
    let cnfrmCases =[];
    let dailyrecovered =[];
    let dailydecreased =[];
    this.totalConfirmed.forEach(trackData=>{
      date.push(trackData['date'])
      cnfrmCases.push(trackData['dailyconfirmed']);
      dailyrecovered.push(trackData['dailyrecovered']);
      dailydecreased.push(trackData['dailydeceased']);

    })

    date.splice(0,(date.length-15));
    cnfrmCases.splice(0,(cnfrmCases.length-15));
    dailydecreased.splice(0,(dailyrecovered.length-15));
    dailyrecovered.splice(0,(dailyrecovered.length-15));


    this.chartOptions = {
      series: [
        {
          name: "Daily Confirmed",
          data: cnfrmCases
        },
        {
          name: "Daily Recovered",
          data: dailyrecovered
        },
        {
          name: "Daily Deceased",
          data: dailydecreased
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 5,
        curve: "straight",
        dashArray: [0, 8, 5]
      },
      title: {
        text: "Page Statistics",
        align: "left"
      },
      legend: {
        tooltipHoverFormatter: function(val, opts) {
          return (
            val +
            " - <strong>" +
            opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
            "</strong>"
          );
        }
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6
        }
      },
      xaxis: {
        labels: {
          trim: true
        },
        categories: date
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function(val) {
                return val + " (mins)";
              }
            }
          },
          {
            title: {
              formatter: function(val) {
                return val + " per session";
              }
            }
          },
          {
            title: {
              formatter: function(val) {
                return val;
              }
            }
          }
        ]
      },
      grid: {
        borderColor: "#f1f1f1"
      }
    };


  }

  ngOnInit() {

    this.tser.fetchlive().subscribe({
      next:(res)=>{
      this.caseStudies = res['cases_time_series'];
      this.totalConfirmed=this.caseStudies;
      this.initChart();
      this.caseStudies = this.caseStudies[this.caseStudies.length - 1];
      
      }
    })
  }

  
}
