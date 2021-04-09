import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from '../modules/ng-zorro-antd.module';
import { RealizationRoutingModule } from './realization-routing.module';
import { RealizationComponent } from './components/realization/realization.component';
import { ArticleModule } from '../article/article.module';

@NgModule({
  declarations: [RealizationComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ArticleModule,
    RealizationRoutingModule,

  ],
  exports: [
    RealizationComponent
  ]
})
export class RealizationModule { }
