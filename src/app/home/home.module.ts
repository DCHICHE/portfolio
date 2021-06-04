import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgZorroAntdModule } from '../modules/ng-zorro-antd.module';
import { SkillsModule } from '../skills/skills.module';
import { RealizationModule } from '../realization/realization.module';
import { LandingComponent } from './components/landing/landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    NzLayoutModule,
    HomeRoutingModule,
    SkillsModule,
    RealizationModule
  ],
  declarations: [
    HomePageComponent,
    ProfileComponent,
    LandingComponent,
    NavbarComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [LandingComponent, NavbarComponent]
})
export class HomeModule { }
