import { Injectable } from '@angular/core';
import { PopupService } from '@kyt/shared/utils';
import { IUser, IRepetition } from '@kyt/shared/models';
import { SchedulerRow } from '@kyt/shared/sections/scheduler-table';
export interface EnrollRepetitionData {
  user: IUser;
  row: SchedulerRow<IRepetition>;
}
export type UserPopup = ['enrollRepetition', EnrollRepetitionData];
@Injectable({
  providedIn: 'root'
})
export class UserPopupService extends PopupService<UserPopup> {
  constructor() {
    super();
  }
}
