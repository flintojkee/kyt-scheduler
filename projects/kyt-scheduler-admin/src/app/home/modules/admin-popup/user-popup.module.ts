import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@kyt/shared';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [PopupComponent],
  imports: [CommonModule, SharedModule],
  exports: [PopupComponent]
})
export class UserPopupModule {}
