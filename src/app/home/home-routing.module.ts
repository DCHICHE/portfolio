import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { HomePageComponent } from './pages/home-page/home-page.component';


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
        loadChildren: () => import('../realization/realization.module').then(m => m.RealizationModule)
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
