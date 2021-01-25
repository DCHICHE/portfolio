import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CompetencesTechComponent } from '../competences-tech/competences-tech.component';
import { ProfileComponent } from '../profile/profile.component';
import { RealizationComponent } from '../realization/realization.component';
import { SkillSoftComponent } from '../skill-soft/skill-soft.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'home',
        component: ProfileComponent
      },
      {
        path: 'skill-tech',
        component: CompetencesTechComponent
      },
      {
        path: 'skill-soft',
        component: SkillSoftComponent
      },
      {
        path: 'realization',
        component: RealizationComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
