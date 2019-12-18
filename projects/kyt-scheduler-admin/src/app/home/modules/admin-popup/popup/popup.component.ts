import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ElementRef
} from '@angular/core';
import { BasePopupComponent } from '@kyt/shared/utils';
import { AdminPopup, AdminPopupService } from '..';
import { RepetitionEditPopupComponent } from '../popups';
const popups = {
  'repetition-edit': RepetitionEditPopupComponent
};

@Component({
  selector: 'kyt-admin-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  entryComponents: [RepetitionEditPopupComponent]
})
export class PopupComponent extends BasePopupComponent<AdminPopup> {
  @ViewChild('popupContainer', { read: ViewContainerRef, static: true }) container: any;
  constructor(
    resolver: ComponentFactoryResolver,
    adminPopupService: AdminPopupService,
    elementRef: ElementRef
  ) {
    super(resolver, adminPopupService, elementRef, popups);
    super.showPopup();
  }
}
