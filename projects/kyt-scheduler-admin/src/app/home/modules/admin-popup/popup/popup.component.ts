import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ElementRef
} from '@angular/core';
import { BasePopupComponent } from '@kyt/shared/utils';
import { AdminPopup } from '..';
import { UserPopupService } from '@kyt-user/home/modules/user-popup';
const popups = {};

@Component({
  selector: 'kyt-admin-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  entryComponents: []
})
export class PopupComponent extends BasePopupComponent<AdminPopup> {
  @ViewChild('userPopupContainer', { read: ViewContainerRef, static: true }) container: any;
  constructor(
    resolver: ComponentFactoryResolver,
    userPopupService: UserPopupService,
    elementRef: ElementRef
  ) {
    super(resolver, userPopupService, elementRef, popups);
    super.showPopup();
  }
}
