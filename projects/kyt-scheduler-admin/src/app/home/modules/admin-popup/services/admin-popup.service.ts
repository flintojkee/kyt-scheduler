import { Injectable } from '@angular/core';
import { PopupService } from '@kyt/shared/utils';

export type AdminPopup = [];
@Injectable({
  providedIn: 'root'
})
export class AdminPopupService extends PopupService<AdminPopup> {
  constructor() {
    super();
  }
}
