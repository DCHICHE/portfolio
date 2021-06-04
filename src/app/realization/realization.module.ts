import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from '../modules/ng-zorro-antd.module';
import { RealizationRoutingModule } from './realization-routing.module';
import { ArticleModule } from '../article/article.module';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ArticleModule,
    RealizationRoutingModule,
  ],
})
export class RealizationModule { }
