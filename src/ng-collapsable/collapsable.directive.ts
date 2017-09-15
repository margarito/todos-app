import { CollapsableHeaderDirective } from './collapsable-header.directive';
import {
    AfterViewInit,
    ContentChild,
    Directive,
    EventEmitter,
    HostListener,
    Input,
    OnDestroy,
    Output,
    ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[collapsable]'
})
export class CollapsableDirective implements AfterViewInit, OnDestroy {
  @ContentChild(CollapsableHeaderDirective)
  private header: CollapsableHeaderDirective;

  private isOpened: boolean;

  private mutationObserver: MutationObserver;

  @Input('collapsable')
  public set opened(value: boolean) {
    this.isOpened = value;
    this.openedChange.emit(this.isOpened);
    this.updateCollapse();

  }

  @Output('collapsable')
  openedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  public constructor(private ref: ViewContainerRef) { }

  public ngAfterViewInit() {
    if (!this.header) {
      throw new Error('collapsable element must have collapsableHeader as first child');
    }
    if (this.ref.element.nativeElement.children[0] !== this.header.ref.element.nativeElement) {
      throw new Error('collapsable element must have collapsableHeader as first child');
    }
    this.ref.element.nativeElement.style.transition = 'height 1s ease';
    this.ref.element.nativeElement.style.display = 'block';
    this.ref.element.nativeElement.style.overflow = 'hidden';
    this.ref.element.nativeElement.style.cursor = 'pointer';
    this.updateCollapse();

    if ((window as {[index: string]: any}).MutationObserver) {
      this.mutationObserver = new MutationObserver(() => {
        this.updateCollapse();
      });
      this.mutationObserver.observe(this.ref.element.nativeElement as Node, {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true
      });
    }
  }

  public ngOnDestroy() {
    this.mutationObserver.disconnect();
  }

  @HostListener('click', ['$event'])
  public elementClicked(event: MouseEvent) {
    this.opened = !this.isOpened;
  }

  @HostListener('change', ['$event'])
  public elementChange(event: MouseEvent) {
    this.updateCollapse();
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event){
    this.updateCollapse();
  }

  private updateCollapse() {
    if (this.isOpened) {
      this.ref.element.nativeElement.style.height = this.ref.element.nativeElement.scrollHeight + 'px';
    } else {
      this.ref.element.nativeElement.style.height = this.header.getHeight() + 'px';
    }
  }

}