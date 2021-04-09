import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgZorroAntdModule } from '../modules/ng-zorro-antd.module';
import { ProfileComponent } from '../profile/profile.component';
import { SkillsModule } from '../skills/skills.module';
import { RealizationModule } from '../realization/realization.module';

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
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeModule { }
