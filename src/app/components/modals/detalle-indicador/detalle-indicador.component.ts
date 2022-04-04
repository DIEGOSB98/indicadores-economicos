import {Component, OnInit, Input} from '@angular/core';
import {Indicador} from '../../../models/indicador';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detalle-indicador',
  templateUrl: './detalle-indicador.component.html',
  styleUrls: ['./detalle-indicador.component.scss']
})
export class DetalleIndicadorComponent implements OnInit {

  @Input() indicador: Indicador;
  @Input() referenciaModal: NgbModalRef;

  constructor() {
  }

  ngOnInit(): void {
  }

}
