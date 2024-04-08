import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessaoComponent } from './sessao/sessao.component';

const routes: Routes = [
  {
    path: 'dashboard/manejo',
    component: SessaoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuloManejoRoutingModule {}
