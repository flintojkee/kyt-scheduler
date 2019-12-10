import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { SchedulerColumn } from '../../models/scheduler-table.model';

@Component({
  selector: 'kyt-scheduler-column',
  templateUrl: './scheduler-column.component.html',
  styleUrls: ['./scheduler-column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SchedulerColumnComponent implements OnInit {
  @Input() column: SchedulerColumn;
  constructor() {}

  ngOnInit() {}
}
