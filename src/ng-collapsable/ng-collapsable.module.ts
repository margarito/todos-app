import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsableDirective } from './collapsable.directive';
import { CollapsableHeaderDirective } from './collapsable-header.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CollapsableDirective,
    CollapsableHeaderDirective
  ],
  exports: [
    CollapsableDirective,
    CollapsableHeaderDirective
  ]
})
export class NgCollapsableModule { }