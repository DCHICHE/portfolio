import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './pages/skills.component';
import { SkillTechComponent } from './components/skill-tech/skill-tech.component';
import { SkillSoftComponent } from './components/skill-soft/skill-soft.component';
import { SkillsRoutingModule } from './skills-routing.module';
import { NgZorroAntdModule } from '../modules/ng-zorro-antd.module';
import { ListSkillComponent } from './components/list-skill/list-skill.component';

@NgModule({
  declarations: [SkillsComponent, SkillTechComponent, SkillSoftComponent, ListSkillComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    SkillsRoutingModule
  ],
  exports: [
    SkillsComponent,
    SkillSoftComponent,
    SkillTechComponent,
  ]
})
export class SkillsModule { }
