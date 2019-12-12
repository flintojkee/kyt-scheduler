import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Observable } from 'rxjs';
import { SchedulerTable, SchedulerRow } from '../../models/scheduler-table.model';

@Component({
  selector: 'kyt-scheduler-table',
  templateUrl: './scheduler-table.component.html',
  styleUrls: ['./scheduler-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SchedulerTableComponent implements OnInit {
  @Input() table: SchedulerTable;
  @Output() selectedRow = new EventEmitter<SchedulerRow>();
  constructor() {}

  ngOnInit() {}
  selectRow(row: SchedulerRow) {
    this.selectedRow.emit(row);
  }
}
