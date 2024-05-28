import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './modulo-cadastro/cadastro/cadastro.component';
import { LoginComponent } from './modulo-cadastro/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './modulo-cadastro/home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './modulo-dashboard/dashboard/dashboard.component';
import { AutenticaInterceptor } from './service/autentica.interceptor';
import { GraficoComponent } from './modulo-dashboard/grafico/grafico.component';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './modulo-dashboard/header/header.component';
import { FooterComponent } from './modulo-dashboard/footer/footer.component';
import { SessaoComponent } from './modulo-manejo/sessao/sessao.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
@NgModule({
  declarations: [AppComponent],
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
