import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloDashboardRoutingModule } from './modulo-dashboard-routing.module';
import { CadastroSuinoComponent } from './cadastro-suino/cadastro-suino.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficoComponent } from './grafico/grafico.component';
import { HistoricoPesoComponent } from './historico-peso/historico-peso.component';
import { MinhaProducaoComponent } from './minha-producao/minha-producao.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CadastroProjetoComponent } from './cadastro-projeto/cadastro-projeto.component';

@NgModule({
  declarations: [
    CadastroSuinoComponent,
    DashboardComponent,
    GraficoComponent,
    HistoricoPesoComponent,
    MinhaProducaoComponent,
    FooterComponent,
    HeaderComponent,
    CadastroProjetoComponent,
  ],
  imports: [CommonModule, ModuloDashboardRoutingModule, ReactiveFormsModule],
  exports: [HeaderComponent, FooterComponent],
})
export class ModuloDashboardModule {}
