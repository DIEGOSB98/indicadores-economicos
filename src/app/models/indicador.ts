import {Serie} from './serie';

export class Indicador {
  codigo: string;
  nombre: string;
  unidad_medida: string;
  fecha: string;
  valor: number;
  serie: Serie[];

  public constructor(init?: Partial<Indicador>) {
    Object.assign(this, init);
  }

  public getInformation(): string[] {
    return Object.entries(this).map(([key, value]) => `${key.toUpperCase()}: ${value}`);
  }
}
