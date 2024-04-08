import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloCadastroRoutingModule } from './modulo-cadastro-routing.module';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from '../modulo-dashboard/header/header.component';
import { FooterComponent } from '../modulo-dashboard/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, CadastroComponent, LoginComponent],
  imports: [
    CommonModule,
    ModuloCadastroRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ModuloCadastroModule {}
