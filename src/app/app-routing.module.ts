import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndicadoresComponent} from './pages/indicadores/indicadores.component';

const routes: Routes = [
  {path: 'indicadores', component: IndicadoresComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'indicadores'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
