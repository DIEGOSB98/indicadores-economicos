import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastrService: ToastrService
  ) {
  }

  public datosCargadosCorrectamente(): void {
    this.toastrService.success('Datos cargados correctamente', 'Aviso');
  }

  public errorCargarDatos(): void {
    this.toastrService.error('No se pudo cargar información', 'Error');
  }
}
