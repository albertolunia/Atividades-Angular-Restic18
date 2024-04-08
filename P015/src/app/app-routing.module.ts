import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './modulo-cadastro/cadastro/cadastro.component';
import { LoginComponent } from './modulo-cadastro/login/login.component';
import { HomeComponent } from './modulo-cadastro/home/home.component';
import { DashboardComponent } from './modulo-dashboard/dashboard/dashboard.component';
import { AuthGuard } from './guards/authorization.guard';
import { MinhaProducaoComponent } from './modulo-dashboard/minha-producao/minha-producao.component';
import { SessaoComponent } from './modulo-manejo/sessao/sessao.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: '', component: CadastroComponent },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard/manejo',
    component: SessaoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'teste',
    component: MinhaProducaoComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
