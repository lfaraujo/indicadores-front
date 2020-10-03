import { Component, OnInit } from '@angular/core';
import { Indicador } from '../models/indicador';
import { IndicadorService } from '../services/indicador.service'

@Component({
  selector: 'app-indicador',
  templateUrl: './indicador.component.html',
  styleUrls: ['./indicador.component.css']
})
export class IndicadorComponent implements OnInit {

  indicadores: Indicador[];
  mesReferencia: string;

  constructor(private indicadorService: IndicadorService) { }

  ngOnInit(): void {
    this.obterIndicadoresPorMesReferencia();
  }

  obterIndicadoresPorMesReferencia() {
    this.indicadorService.obterIndicadoresPorMesReferencia().then(response => {

      this.indicadores = response;

      if (this.indicadores != null && this.indicadores.length > 0) {
        this.mesReferencia = this.indicadores[0].producao.mesReferencia;
      }
    });
  }

}
