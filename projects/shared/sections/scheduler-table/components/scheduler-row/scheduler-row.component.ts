import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { SchedulerRow } from '../../models/scheduler-table.model';

@Component({
  selector: 'kyt-scheduler-row',
  templateUrl: './scheduler-row.component.html',
  styleUrls: ['./scheduler-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SchedulerRowComponent implements OnInit {
  @Input() row: SchedulerRow;
  constructor() {}

  ngOnInit() {}
}
