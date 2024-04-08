import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloManejoRoutingModule } from './modulo-manejo-routing.module';
import { SessaoComponent } from './sessao/sessao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuloDashboardModule } from '../modulo-dashboard/modulo-dashboard.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [SessaoComponent],
  imports: [
    CommonModule,
    ModuloManejoRoutingModule,
    ReactiveFormsModule,
    ModuloDashboardModule,
    NgMultiSelectDropDownModule,
    FormsModule,
  ],
})
export class ModuloManejoModule {}
