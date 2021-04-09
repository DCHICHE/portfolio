import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from '../modules/ng-zorro-antd.module';
import { RealizationRoutingModule } from './realization-routing.module';
import { RealizationComponent } from './components/realization/realization.component';

@NgModule({
  declarations: [RealizationComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RealizationRoutingModule
  ],
  exports: [
    RealizationComponent
  ]
})
export class RealizationModule { }
