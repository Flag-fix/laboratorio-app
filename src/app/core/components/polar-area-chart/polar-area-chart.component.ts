import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import {Service} from "../../services/service";
Chart.register(...registerables);

@Component({
  selector: 'app-polar-area-chart',
  templateUrl: './polar-area-chart.component.html',
  styleUrls: ['./polar-area-chart.component.css']
})
export class PolarAreaChartComponent implements OnInit {
  private values: Array<any> = [];
  private labels: Array<any> = [];

  constructor(
    private service: Service,
  ) { }

  ngOnInit() {
    this.buscarDoadores()
  }


  async buscarDoadores() {
    await this.service.getQtdDoadores().then(response => {
      console.log("Retorno :" + JSON.stringify(response));
      if (response.length > 0) {
        console.log(response);
        for (let item of response) {
            this.labels.push(item.sangue)
            this.values.push(item.possiveisDoadores)
          }
      }
    })
    this.polarArea()
  }

  polarArea(){
    var myChart = new Chart("porAreaChart", {
      type: 'polarArea',
      data : {
        labels: this.labels,
        datasets: [{
          label: 'Doadores',
          data: this.values,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(255, 100, 70)',
            'rgb(150, 205, 86)',
            'rgb(70, 5, 86)',
            'rgb(225, 205, 86)',
            'rgb(9, 7, 2)',
            'rgb(150, 5, 86)',
          ]
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
