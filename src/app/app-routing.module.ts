import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultsComponent } from './results/results.component';
import { OperatorsComponent } from './operators/operators.component';


const routes: Routes = [
  { path: '', redirectTo: 'result', pathMatch: 'full' },
  { path: 'result', component: ResultsComponent },
  { path: 'operator', component: OperatorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
