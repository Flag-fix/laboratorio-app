import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import {Service} from "../../services/service";
Chart.register(...registerables);

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {
  private values: Array<any> = [];
  private labels: Array<any> = [];

  constructor(
    private service: Service,
  ) { }

  ngOnInit() {
    this.getQtdTipoSanguineo()
  }


  async getQtdTipoSanguineo() {
    await this.service.getQtdTipoSanguineo().then(response => {
      console.log("Retorno :" + JSON.stringify(response));
      if (response.length > 0) {
        console.log(response);
        for (let item of response) {
            this.labels.push(item.sangue)
            this.values.push(Math.round(item.idadeMedia))
        }
        console.log(this.labels)
        console.log(this.values)
      }
    })
    this.doughnut()
  }

  doughnut(){
    var myChart = new Chart("doughnutChart", {
      type: 'doughnut',
      data :{
        labels: this.labels,
        datasets: [{
          label: 'Média de TIpo sanguineo por Idade',
          data: this.values,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
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
