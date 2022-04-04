import {Component, OnInit} from '@angular/core';
import {Indicador} from '../../models/indicador';
import {MiIndicadorService} from '../../services/mi-indicador.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastService} from '../../services/toast.service';
import {DetallePrecioComponent} from '../../components/modals/detalle-precio/detalle-precio.component';
import {DetalleIndicadorComponent} from '../../components/modals/detalle-indicador/detalle-indicador.component';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.scss']
})
export class IndicadoresComponent implements OnInit {

  public indicadores: Indicador[] = [];
  public estadoCargando = false;

  constructor(
    private miIndicadorService: MiIndicadorService,
    private modalService: NgbModal,
    private toastService: ToastService
  ) {
  }

  ngOnInit(): void {
    this.obtenerIndicadoresDelServicio();
  }

  public obtenerIndicadoresDelServicio(): void {
    this.estadoCargando = true;
    this.miIndicadorService.obtenerIndicadores().subscribe({
      next: indicadores => {
        this.indicadores = indicadores;
        this.estadoCargando = false;
      },
      error: () => {
        this.toastService.errorCargarDatos();
        this.estadoCargando = false;
      },
      complete: () => {
        this.toastService.datosCargadosCorrectamente();
      }
    });
  }

  public abrirModalDetallePrecios(indicador: Indicador): void {
    const referenciaModal = this.modalService.open(DetallePrecioComponent, {scrollable: true});
    const instanciaModal = referenciaModal.componentInstance as DetallePrecioComponent;
    instanciaModal.indicador = indicador;
    instanciaModal.referenciaModal = referenciaModal;
  }

  public abrirModalDetalleIndicador(indicador: Indicador): void {
    const referenciaModal = this.modalService.open(DetalleIndicadorComponent);
    const instanciaModal = referenciaModal.componentInstance as DetalleIndicadorComponent;
    instanciaModal.indicador = indicador;
    instanciaModal.referenciaModal = referenciaModal;
  }
}
