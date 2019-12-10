import { Component, OnInit } from '@angular/core';
import { SchedulerTable } from '@kyt/shared/sections/scheduler-table';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'kyt-scheduler-admin';
  table$: Observable<SchedulerTable>;

  ngOnInit() {
    this.table$ = of({
      today: new Date(),
      title: 'Kyt Scheduler',
      columns: [
        {
          column_id: 0,
          title: 'Monday',
          rows: []
        },
        {
          column_id: 1,
          title: 'Tuesday',
          rows: []
        },
        {
          column_id: 2,
          title: 'Wednesday',
          rows: []
        },
        {
          column_id: 3,
          title: 'Thursday',
          rows: []
        },
        {
          column_id: 3,
          title: 'Friday',
          rows: []
        }
      ]
    });
  }
}
