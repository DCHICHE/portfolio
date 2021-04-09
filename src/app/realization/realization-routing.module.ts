import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RealizationComponent } from './components/realization/realization.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: RealizationComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealizationRoutingModule { }
