import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbAccordionModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {IndicadoresComponent} from './indicadores/indicadores.component';

@NgModule({
  declarations: [
    IndicadoresComponent
  ],
  imports: [
    CommonModule,
    NgbAccordionModule,
    RouterModule,
    SharedModule
  ]
})
export class PagesModule {
}
