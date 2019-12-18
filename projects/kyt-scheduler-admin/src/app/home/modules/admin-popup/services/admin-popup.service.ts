import { Injectable } from '@angular/core';
import { PopupService } from '@kyt/shared/utils';
import { IRepetition } from '@kyt/shared/models';

export type AdminPopup = ['repetition-edit', IRepetition];
@Injectable({
  providedIn: 'root'
})
export class AdminPopupService extends PopupService<AdminPopup> {
  constructor() {
    super();
  }
}
