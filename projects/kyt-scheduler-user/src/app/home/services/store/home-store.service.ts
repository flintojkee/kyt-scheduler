import { Injectable } from '@angular/core';
import { StateService } from '@kyt-admin/store/state.service';
import { SchedulerTable, SchedulerRow } from '@kyt/shared/sections/scheduler-table';
import { IRepetition, IUser } from '@kyt/shared/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SchedulerService } from '../utils/scheduler.service';

@Injectable({
  providedIn: 'root'
})
export class HomeStoreService {
  constructor(private stateService: StateService, private schedulerService: SchedulerService) {}

  initScheduler() {
    if (Object.keys(this.stateService.state).indexOf('albums') === -1) {
      const scheduler = this.schedulerService.getEmptyScheduler(new Date(), 1);
      this.stateService.dispatch({
        key: 'scheduler',
        payload: { ...scheduler }
      });
    }
  }

  dispatchScheduler(scheduler: SchedulerTable<IRepetition>) {
    this.stateService.dispatch({
      key: 'scheduler',
      payload: { ...scheduler }
    });
  }
  dispatchSchedulerRow(row: SchedulerRow<IRepetition>) {
    const scheduler: SchedulerTable<IRepetition> = this.stateService.state['scheduler'];
    console.log(this.stateService.state);
    scheduler.columns.map((c) => {
      c.rows.map((r, index) => {
        if (r.data.date.toTimeString() === row.data.date.toTimeString()) {
          c.rows.splice(index, 1, row);
        }
      });
    });
    this.dispatchScheduler(scheduler);
  }

  getSchedulerState(): Observable<SchedulerTable<IRepetition>> {
    this.initScheduler();
    return this.stateService.state$.pipe(
      map((s) => {
        return s['scheduler'];
      })
    );
  }

  initUser() {
    if (Object.keys(this.stateService.state).indexOf('user') === -1) {
      const user: IUser = {
        user_id: 343561467,
        first_name: 'Denys',
        last_name: 'Vasylenko',
        username: 'flintojkee',
        photo_url: 'https://t.me/i/userpic/320/Mo-wVDly9r8BKl7yBK0EmKseU3gGBlReuKN091gFq8o.jpg'
      };
      this.dispatchUser(user);
    }
  }
  dispatchUser(user: IUser) {
    this.stateService.dispatch({
      key: 'user',
      payload: { ...user }
    });
  }
  getUserState(): Observable<IUser> {
    this.initUser();
    return this.stateService.state$.pipe(
      map((s) => {
        return s['user'];
      })
    );
  }
}
