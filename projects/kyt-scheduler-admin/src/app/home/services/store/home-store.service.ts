import { Injectable } from '@angular/core';
import { StateService } from '@kyt-admin/store/state.service';
import { SchedulerTable } from '@kyt/shared/sections/scheduler-table';
import { IRepetition } from '@kyt/shared/models';
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
      payload: scheduler
    });
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
