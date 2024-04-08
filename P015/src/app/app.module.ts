import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './ModuloCadastro/cadastro/cadastro.component';
import { LoginComponent } from './ModuloCadastro/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CadastroSuinoComponent } from './ModuloDashboard/cadastro-suino/cadastro-suino.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './ModuloDashboard/dashboard/dashboard.component';
import { AutenticaInterceptor } from './service/autentica.interceptor';
import { GraficoComponent } from './ModuloDashboard/grafico/grafico.component';
import { MatIconModule } from '@angular/material/icon';
import { HistoricoPesoComponent } from './ModuloDashboard/historico-peso/historico-peso.component';
import { MinhaProducaoComponent } from './ModuloDashboard/minha-producao/minha-producao.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SessaoComponent } from './ModuloManejo/sessao/sessao.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    LoginComponent,
    HomeComponent,
    CadastroSuinoComponent,
    DashboardComponent,
    GraficoComponent,
    HistoricoPesoComponent,
    MinhaProducaoComponent,
    HeaderComponent,
    FooterComponent,
    SessaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AutenticaInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
