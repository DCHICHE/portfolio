import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProfileComponent } from '../profile/profile.component';
import { RealizationComponent } from '../realization/realization.component';


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
        path: 'skill',
        loadChildren: () => import('../skills/skills.module').then(m => m.SkillsModule)
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
