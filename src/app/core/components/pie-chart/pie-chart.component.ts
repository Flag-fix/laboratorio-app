import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import {Service} from "../../services/service";
Chart.register(...registerables);


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  private values: Array<any> = [];
  private labels: Array<any> = [];

  constructor(
    private service: Service,
  ) { }

  ngOnInit() {
    this.buscarIMCMedio()
  }

  async buscarIMCMedio() {
    await this.service.getMediaIdadeIMC().then(response => {
      console.log("Retorno :" + JSON.stringify(response));
      if (response.length > 0) {
        console.log(response);
        for (let item of response) {
          if(!isNaN(item.imcMedio)){
            this.labels.push(item.faixaEtaria)
            this.values.push(Math.round(item.imcMedio))
          }
        }
      }
    })
    this.pieChart()
  }

  pieChart(){
    var myChart = new Chart("pieChart", {
      type: 'pie',
      data: {
        labels: this.labels,
        datasets: [{
          label: 'IMC Médio',
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
          ],
          hoverOffset: 4
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
