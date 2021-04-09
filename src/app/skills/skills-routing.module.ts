import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsComponent } from './pages/skills.component';
import { SkillTechComponent } from './components/skill-tech/skill-tech.component';
import { SkillSoftComponent } from './components/skill-soft/skill-soft.component';
import { ListArticleComponent } from '../article/components/list-article/list-article.component';


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
        component: SkillSoftComponent
      },
      {
        path: 'skill-tech/:skill',
        component: SkillTechComponent
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
