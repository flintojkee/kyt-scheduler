import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { SchedulerRow } from '../../models/scheduler-table.model';

@Component({
  selector: 'kyt-scheduler-row',
  templateUrl: './scheduler-row.component.html',
  styleUrls: ['./scheduler-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SchedulerRowComponent implements OnInit {
  @Input() row: SchedulerRow;
  @Input() columnId: number;
  @Output() selected = new EventEmitter<SchedulerRow>();
  isOdd: boolean;
  constructor() {}

  ngOnInit() {
    this.isOdd = this.row.id % 2 !== 0;
  }
  select(row: SchedulerRow) {
    this.selected.emit(row);
  }
}
