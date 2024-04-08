import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './ModuloCadastro/cadastro/cadastro.component';
import { LoginComponent } from './ModuloCadastro/login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './ModuloDashboard/dashboard/dashboard.component';
import { AuthGuard } from './guards/authorization.guard';
import { MinhaProducaoComponent } from './ModuloDashboard/minha-producao/minha-producao.component';
import { SessaoComponent } from './ModuloManejo/sessao/sessao.component';

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
