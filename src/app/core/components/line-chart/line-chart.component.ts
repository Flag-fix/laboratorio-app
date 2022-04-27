import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import {Service} from "../../services/service";

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  private values: Array<any> = [];
  private labels: Array<any> = [];

  constructor(
    private service: Service,
  ) { }

  ngOnInit() {
    this.getQtdObesos()
  }

  async getQtdObesos() {
    await this.service.getQtdObesos().then(response => {
      console.log("Retorno :" + JSON.stringify(response));
      if (response.length > 0) {
        console.log(response);
        for (let item of response) {
            this.values.push(item.qtdObesoM,item.qtdObesoF)
        }
      }
    })
    this.chartInLine()
  }



  chartInLine(){
    var myChart = new Chart("lineChart", {
      type: 'bar',
      data: {
        labels: ["Homens", "Mulheres"],
        datasets: [{
          label: 'Qtd Obesos por Sexo ',
          data: this.values,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
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
