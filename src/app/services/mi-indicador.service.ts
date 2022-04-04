import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Indicador} from '../models/indicador';
import {Serie} from '../models/serie';
import {convertObjectToArray} from '../helpers/object-transform';

@Injectable({
  providedIn: 'root'
})
export class MiIndicadorService {

  private url = 'https://mindicador.cl/api';
  private llavesIgnoradas = ['version', 'autor', 'fecha'];

  constructor(
    private http: HttpClient
  ) {
  }

  public obtenerIndicadores(): Observable<Indicador[]> {
    return this.http.get(this.url).pipe(map(indicadores => convertObjectToArray(indicadores, this.llavesIgnoradas).map(objeto => new Indicador(objeto as Indicador))));
  }

  public obtenerSeriesPorCodigoDeIndicador(codigoIndicador: string): Observable<Serie[]> {
    const url = `${this.url}/${codigoIndicador}`;
    return this.http.get<Indicador>(url).pipe(map(indicador => indicador.serie.map(serie => new Serie(serie))));
  }
}
