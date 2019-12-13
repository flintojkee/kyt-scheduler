import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ElementRef
} from '@angular/core';
import { BasePopupComponent } from '@kyt/shared/utils';
import { UserPopupService, UserPopup } from '../services/user-popup.service';
import { EnrollRepetitionPopupComponent } from '../popups/enroll-repetition-popup/enroll-repetition-popup.component';
const popups = {
  enrollRepetition: EnrollRepetitionPopupComponent
};

@Component({
  selector: 'kyt-user-user-popup',
  templateUrl: './user-popup.component.html',
  styleUrls: ['./user-popup.component.scss'],
  entryComponents: [EnrollRepetitionPopupComponent]
})
export class UserPopupComponent extends BasePopupComponent<UserPopup> {
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
