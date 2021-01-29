import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsComponent } from './pages/skills.component';
import { SkillTechComponent } from './components/skill-tech/skill-tech.component';
import { SkillSoftComponent } from './components/skill-soft/skill-soft.component';


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
        component: SkillTechComponent
      },
      {
        path: 'skill-soft',
        component: SkillSoftComponent
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
