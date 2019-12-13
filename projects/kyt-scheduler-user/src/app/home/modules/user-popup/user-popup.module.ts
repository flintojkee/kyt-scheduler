import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@kyt/shared';
import { UserPopupComponent } from './user-popup/user-popup.component';
import { EnrollRepetitionPopupComponent } from './popups/enroll-repetition-popup/enroll-repetition-popup.component';

@NgModule({
  declarations: [UserPopupComponent, EnrollRepetitionPopupComponent],
  imports: [CommonModule, SharedModule],
  exports: [UserPopupComponent]
})
export class UserPopupModule {}
