import { Injectable } from '@angular/core';
import { PopupService } from '@kyt/shared/utils';
import { RepetitionEditData } from '../popups';

export type AdminPopup = ['repetition-edit', RepetitionEditData];
@Injectable({
  providedIn: 'root'
})
export class AdminPopupService extends PopupService<AdminPopup> {
  constructor() {
    super();
  }
}
