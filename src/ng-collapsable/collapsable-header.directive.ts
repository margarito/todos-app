import { AfterViewInit, Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[collapsable-header]'
})
export class CollapsableHeaderDirective implements AfterViewInit {

  public constructor(public ref: ViewContainerRef) { }

  public ngAfterViewInit() {
    console.log('collapsable-header initialized');
  }

  public getHeight() {
    var height = this.ref.element.nativeElement.offsetHeight;
    var style = getComputedStyle(this.ref.element.nativeElement);

    height += parseInt(style.marginTop) + parseInt(style.marginBottom);
    return height;
  }
}