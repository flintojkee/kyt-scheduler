import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@kyt/shared';
import { PopupComponent } from './popup/popup.component';
import { RepetitionEditPopupComponent } from './popups/repetition-edit-popup/repetition-edit-popup.component';

@NgModule({
  declarations: [PopupComponent, RepetitionEditPopupComponent],
  imports: [CommonModule, SharedModule],
  exports: [PopupComponent]
})
export class AdminPopupModule {}
