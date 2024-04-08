import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloCadastroRoutingModule } from './modulo-cadastro-routing.module';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    CadastroComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [CommonModule, ModuloCadastroRoutingModule],
})
export class ModuloCadastroModule {}
