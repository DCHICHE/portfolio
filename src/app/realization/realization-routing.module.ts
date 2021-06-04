import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from '../article/components/article/article.component';
import { ListArticleComponent } from '../article/components/list-article/list-article.component';

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
        component: ArticleComponent
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealizationRoutingModule { }
