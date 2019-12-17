import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';
import { SchedulerColumn, SchedulerRow, SchedulerTable } from '../../models/scheduler-table.model';
import { Observable } from 'rxjs';
import { IRepetition } from '@kyt/shared/models';

@Component({
  selector: 'kyt-scheduler-column',
  templateUrl: './scheduler-column.component.html',
  styleUrls: ['./scheduler-column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SchedulerColumnComponent implements OnInit {
  @Input() column: SchedulerColumn;
  @Output() selectedRow = new EventEmitter<SchedulerRow>();
  rows: SchedulerRow<IRepetition>[];
  isToday: boolean;
  constructor() {}

  ngOnInit() {
    this.isToday = this.column.date
      ? new Date(this.column.date).toDateString() === new Date().toDateString()
      : false;
  }
  selectRow(row: SchedulerRow) {
    this.selectedRow.emit(row);
  }
}
