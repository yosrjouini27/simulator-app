import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { SimulatorComponent } from './simulator.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  declarations: [SimulatorComponent],
  exports: [SimulatorComponent],
  providers: [],
})
export class SimulatorModule {}
