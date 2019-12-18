import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { SchedulerRow } from '../../models/scheduler-table.model';
import { IRepetition, RepetitionStatus } from '@kyt/shared/models';

@Component({
  selector: 'kyt-scheduler-row',
  templateUrl: './scheduler-row.component.html',
  styleUrls: ['./scheduler-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SchedulerRowComponent implements OnInit {
  @Input() row: SchedulerRow<IRepetition>;
  @Input() columnId: number;
  @Output() selected = new EventEmitter<SchedulerRow>();
  isOdd: boolean;
  isPast: boolean;
  repetitionStatus = RepetitionStatus;
  constructor() {}

  ngOnInit() {
    this.isOdd = this.row.id % 2 !== 0;
    if (this.row.data.date) {
      this.isPast = this.row.data.date < new Date();
    }
  }
  select(row: SchedulerRow) {
    if (!this.isPast) {
      this.selected.emit(row);
    }
  }
}
