import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {DetalleIndicadorComponent} from './detalle-indicador/detalle-indicador.component';
import {DetallePrecioComponent} from './detalle-precio/detalle-precio.component';


@NgModule({
  exports: [
    DetallePrecioComponent,
    DetalleIndicadorComponent
  ],
  declarations: [
    DetalleIndicadorComponent,
    DetallePrecioComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ModalsModule {
}
