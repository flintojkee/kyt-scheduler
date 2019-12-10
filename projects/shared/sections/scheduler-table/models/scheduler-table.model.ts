import { Repetition } from '@kyt/shared/models';

export interface SchedulerRow extends Repetition {
  row_id: number;
}
export interface SchedulerColumn {
  column_id: number;
  title: string;
  date?: string | Date;
  rows: SchedulerRow[];
}
export interface SchedulerTable {
  today: Date | string;
  title: string;
  columns: SchedulerColumn[];
}
