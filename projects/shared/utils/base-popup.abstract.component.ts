import {
  OnInit,
  OnDestroy,
  ComponentFactoryResolver,
  ElementRef,
  ComponentFactory,
  ComponentRef,
  ViewContainerRef,
  ViewChild
} from '@angular/core';
import { untilDestroyed } from 'ngx-take-until-destroy';

export abstract class BasePopupComponent<T> implements OnInit, OnDestroy {
  @ViewChild('', { read: ViewContainerRef, static: true }) container: {
    clear: () => void;
    createComponent: (arg0: ComponentFactory<any>) => ComponentRef<any>;
  };
  componentRef: ComponentRef<any>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private popupService: any,
    private elementRef: ElementRef,
    private popups: any
  ) {}
  ngOnInit() {}

  ngOnDestroy() {}

  showPopup() {
    this.popupService
      .getPopup()
      .pipe(untilDestroyed(this))
      .subscribe((result: T) => {
        if (result && result[0]) {
          this.container.clear();
          const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(
            this.popups[result[0] as string]
          );
          this.componentRef = this.container.createComponent(factory);
          this.elementRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
          if (result[1]) {
            this.componentRef.instance.inputData = result[1];
          }
        } else {
          this.closePopup();
        }
      });
  }
  closePopup() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
    this.elementRef.nativeElement.ownerDocument.body.style.overflow = '';
  }
}
