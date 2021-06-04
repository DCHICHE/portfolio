import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './pages/skills.component';
import { SkillsRoutingModule } from './skills-routing.module';
import { NgZorroAntdModule } from '../modules/ng-zorro-antd.module';
import { ArticleModule } from '../article/article.module';

@NgModule({
  declarations: [SkillsComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    SkillsRoutingModule,
    ArticleModule
  ],
  exports: [
    SkillsComponent,
  ]
})
export class SkillsModule { }
