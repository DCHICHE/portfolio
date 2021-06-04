import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListArticleComponent } from '../article/components/list-article/list-article.component';
import { RealizationComponent } from './components/realization/realization.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListArticleComponent,
      },
      {
        path: ':skill',
        component: RealizationComponent
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealizationRoutingModule { }
