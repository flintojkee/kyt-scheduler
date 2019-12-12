import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { SchedulerColumn, SchedulerRow } from '../../models/scheduler-table.model';

@Component({
  selector: 'kyt-scheduler-column',
  templateUrl: './scheduler-column.component.html',
  styleUrls: ['./scheduler-column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SchedulerColumnComponent implements OnInit {
  @Input() column: SchedulerColumn;
  @Output() selectedRow = new EventEmitter<SchedulerRow>();
  isToday: boolean;
  constructor() {}

  ngOnInit() {
    this.isToday = this.column.date
      ? this.column.date.toDateString() === new Date().toDateString()
      : false;
  }
  selectRow(row: SchedulerRow) {
    this.selectedRow.emit(row);
  }
}
