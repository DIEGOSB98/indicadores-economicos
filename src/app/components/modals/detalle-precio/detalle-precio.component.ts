import {Component, Input, OnInit} from '@angular/core';
import {Indicador} from '../../../models/indicador';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {Serie} from '../../../models/serie';
import {MiIndicadorService} from '../../../services/mi-indicador.service';
import {ToastService} from '../../../services/toast.service';

@Component({
  selector: 'app-detalle-precio',
  templateUrl: './detalle-precio.component.html',
  styleUrls: ['./detalle-precio.component.scss']
})
export class DetallePrecioComponent implements OnInit {

  @Input() indicador: Indicador;
  @Input() referenciaModal: NgbModalRef;

  public series: Serie[] = [];
  public estadoCargando = false;

  constructor(
    private miIndicadorService: MiIndicadorService,
    private toastService: ToastService
  ) {
  }

  ngOnInit(): void {
    this.obtenerSeries();
  }

  private obtenerSeries(): void {
    this.estadoCargando = true;
    this.miIndicadorService.obtenerSeriesPorCodigoDeIndicador(this.indicador.codigo).subscribe({
      next: series => {
        this.series = series;
        this.estadoCargando = false;
      },
      error: () => {
        this.estadoCargando = false;
        this.toastService.errorCargarDatos();
      },
      complete: () => {
        this.toastService.datosCargadosCorrectamente();
      }
    });
  }
}
