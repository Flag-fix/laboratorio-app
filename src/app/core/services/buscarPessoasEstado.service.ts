import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscarPessoasEstadoService {

constructor(private http: HttpClient) {
}

baseURL = "http://localhost:8080";



public getBuscarPessoaEstado(): Observable<any[]>{
  return this.http.get<any[]>(`${this.baseURL}/pessoas`).pipe(take(1));
  }

}
