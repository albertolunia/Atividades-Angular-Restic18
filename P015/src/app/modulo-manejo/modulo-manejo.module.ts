import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloManejoRoutingModule } from './modulo-manejo-routing.module';
import { SessaoComponent } from './sessao/sessao.component';

@NgModule({
  declarations: [SessaoComponent],
  imports: [CommonModule, ModuloManejoRoutingModule],
})
export class ModuloManejoModule {}
