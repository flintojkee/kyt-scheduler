import { Injectable } from '@angular/core';
import { StateService } from '@kyt-admin/store/state.service';
import { SchedulerTable, SchedulerRow } from '@kyt/shared/sections/scheduler-table';
import { IRepetition, IUser } from '@kyt/shared/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SchedulerService } from '@kyt/shared/sections/scheduler-table/services/scheduler.service';

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
  dispatchSchedulerRowData(data: IRepetition) {
    const scheduler: SchedulerTable<IRepetition> = this.stateService.state['scheduler'];
    scheduler.columns.map((c) => {
      if (c.id !== -1) {
        c.rows.map((r, index) => {
          if (
            new Date(r.data.repetition_date).toDateString() ===
              new Date(data.repetition_date).toDateString() &&
            r.data.start_time === data.start_time &&
            r.data.end_time === data.end_time
          ) {
            const row: SchedulerRow<IRepetition> = {
              ...r,
              data: {
                ...data,
                repetition_date: new Date(data.repetition_date)
              }
            };
            c.rows.splice(index, 1, row);
          }
        });
      }
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
}
