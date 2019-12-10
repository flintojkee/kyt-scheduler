import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { SchedulerTable } from '../../models/scheduler-table.model';

@Component({
  selector: 'kyt-scheduler-table',
  templateUrl: './scheduler-table.component.html',
  styleUrls: ['./scheduler-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SchedulerTableComponent implements OnInit {
  @Input() table$: Observable<SchedulerTable>;
  constructor() {}

  ngOnInit() {}
}
