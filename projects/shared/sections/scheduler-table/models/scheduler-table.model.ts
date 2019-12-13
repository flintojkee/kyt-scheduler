export interface SchedulerRow<T = any> {
  id: number;
  title: string;
  data?: T;
}
export interface SchedulerColumn<T = any> {
  id: number;
  title: string;
  date?: Date;
  rows: SchedulerRow<T>[];
}
export interface SchedulerTable<T = any> {
  today: Date | string;
  title: string;
  columns: SchedulerColumn<T>[];
  room_number: number;
}
