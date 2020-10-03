import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Indicador } from '../models/indicador';

@Injectable({
  providedIn: 'root'
})
export class IndicadorService {

  url = 'http://localhost:8080/indicador'

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'mesReferencia': 'Julho/2020' })
  }

  obterIndicadoresPorMesReferencia(): Promise<Indicador[]> {
    return this.httpClient.get<Indicador[]>(this.url, this.httpOptions)
    .toPromise()
    .then(response => {
      return response;
    });
  }
}
