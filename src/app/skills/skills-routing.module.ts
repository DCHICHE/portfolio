import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsComponent } from './pages/skills.component';
import { ListArticleComponent } from '../article/components/list-article/list-article.component';
import { ArticleComponent } from '../article/components/article/article.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SkillsComponent,
      },
      {
        path: 'skill-tech',
        component: ListArticleComponent
      },
      {
        path: 'skill-soft',
        component: ListArticleComponent
      },
      {
        path: 'skill-soft/:skill',
        component: ArticleComponent
      },
      {
        path: 'skill-tech/:skill',
        component: ArticleComponent
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
