import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.chartInLine();
  }



  labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
  values = [65, 59, 80, 81, 56, 55, 40]

  chartInLine(){
    var myChart = new Chart("lineChart", {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [{
          label: 'Teste Relatório',
          data: this.values,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
  }
}
