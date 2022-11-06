import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { SimulatorComponent } from './simulator/simulator.component';

const routes: Routes = [
  { path: 'simulator', component: SimulatorComponent }, //route to simulator
  { path: '', redirectTo: 'simulator', pathMatch: 'full' }, // default route
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
