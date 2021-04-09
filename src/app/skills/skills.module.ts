import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './pages/skills.component';
import { SkillTechComponent } from './components/skill-tech/skill-tech.component';
import { SkillSoftComponent } from './components/skill-soft/skill-soft.component';
import { SkillsRoutingModule } from './skills-routing.module';
import { NgZorroAntdModule } from '../modules/ng-zorro-antd.module';
import { ArticleModule } from '../article/article.module';

@NgModule({
  declarations: [SkillsComponent, SkillTechComponent, SkillSoftComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    SkillsRoutingModule,
    ArticleModule
  ],
  exports: [
    SkillsComponent,
    SkillSoftComponent,
    SkillTechComponent,
  ]
})
export class SkillsModule { }
