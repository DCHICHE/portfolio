import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from '../modules/ng-zorro-antd.module';
import { ListArticleComponent } from './components/list-article/list-article.component';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';

@NgModule({
  declarations: [ListArticleComponent, ArticleComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgZorroAntdModule,
  ],
  exports: [
    ListArticleComponent,
    ArticleComponent,
  ]
  ,schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ArticleModule { }
