import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(private http: HttpClient) {
  }

  private static BASE_URL = "http://localhost:8080";
  private static URL_PESSOA = `${Service.BASE_URL}/pessoa`;


  async getPessoaEstado() {
    return await new Promise<any>((resolve, reject) => {
      this.http.get(`${Service.BASE_URL}/estado`)
        .subscribe(
          res => {
            resolve(res)
          }, error => {
            reject(error.status + ' | ' + error.statusText);
            console.error(error);
          });
    },)
  }

  async getMediaIdadeIMC(){
    return await new Promise<any>((resolve, reject) => {
      this.http.get(`${Service.URL_PESSOA}/imc`)
        .subscribe(
          res =>{
            resolve(res)
          }, error => {
            reject(error.status + ' | ' + error.statusText);
            console.error(error);
          });
    },)
  }

  async getQtdObesos(){
    return await new Promise<any>((resolve, reject) => {
      this.http.get(`${Service.URL_PESSOA}/obesidade`)
        .subscribe(
          res =>{
            resolve(res)
          }, error => {
            reject(error.status + ' | ' + error.statusText);
            console.error(error);
          });
    },)
  }

  async getQtdTipoSanguineo(){
    return await new Promise<any>((resolve, reject) => {
      this.http.get(`${Service.URL_PESSOA}/tipo-sanguineo`)
        .subscribe(
          res =>{
            resolve(res)
          }, error => {
            reject(error.status + ' | ' + error.statusText);
            console.error(error);
          });
    },)
  }

  async getQtdDoadores(){
    return await new Promise<any>((resolve, reject) => {
      this.http.get(`${Service.URL_PESSOA}/doadores`)
        .subscribe(
          res =>{
            resolve(res)
          }, error => {
            reject(error.status + ' | ' + error.statusText);
            console.error(error);
          });
    },)
  }


}
