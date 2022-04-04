export class Serie {
  fecha: Date = new Date();
  valor: number = 0;

  public constructor(init?: Partial<Serie>) {
    Object.assign(this, init);
  }
}
