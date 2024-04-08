import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/authorization.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modulo-cadastro/modulo-cadastro.module').then(
        (m) => m.ModuloCadastroModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modulo-dashboard/modulo-dashboard.module').then(
        (m) => m.ModuloDashboardModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard/manejo',
    loadChildren: () =>
      import('./modulo-manejo/modulo-manejo.module').then(
        (m) => m.ModuloManejoModule
      ),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
