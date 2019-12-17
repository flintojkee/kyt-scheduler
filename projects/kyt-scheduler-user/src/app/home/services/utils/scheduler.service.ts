import { Injectable } from '@angular/core';
import { SchedulerTable, SchedulerColumn } from '@kyt/shared/sections/scheduler-table';
import { IRepetition, RepetitionStatus } from '@kyt/shared/models';
@Injectable({
  providedIn: 'root'
})
export class SchedulerService {
  private schedulerColumns = [
    { id: -1, title: '', rows: [] },
    { id: 0, title: 'Sunday', rows: [] },
    { id: 1, title: 'Monday', rows: [] },
    { id: 2, title: 'Tuesday', rows: [] },
    { id: 3, title: 'Wednesday', rows: [] },
    { id: 4, title: 'Thursday', rows: [] },
    { id: 5, title: 'Friday', rows: [] },
    { id: 6, title: 'Saturday', rows: [] }
  ];

  private schedulerRows = [
    {
      title: '08:30-09:00'
    },
    {
      title: '09:00-09:30'
    },
    {
      title: '09:30-10:00'
    },
    {
      title: '10:00-10:30'
    },
    {
      title: '10:30-11:00'
    },
    {
      title: '11:00-11:30'
    },
    {
      title: '11:30-12:00'
    },
    {
      title: '12:00-12:30'
    },
    {
      title: '12:30-13:00'
    },
    {
      title: '13:00-13:30'
    },
    {
      title: '13:30-14:00'
    },
    {
      title: '14:00-14:30'
    },
    {
      title: '15:00-15:30'
    },
    {
      title: '15:30-16:00'
    },
    {
      title: '16:00-16:30'
    },
    {
      title: '16:30-17:00'
    },
    {
      title: '17:00-17:30'
    },
    {
      title: '17:00-17:30'
    },
    {
      title: '18:00-18:30'
    },
    {
      title: '18:30-19:00'
    },
    {
      title: '19:00-19:30'
    },
    {
      title: '19:30-20:00'
    },
    {
      title: '20:00-20:30'
    },
    {
      title: '20:30-21:00'
    },
    {
      title: '21:00-21:30'
    },
    {
      title: '21:30-22:00'
    }
  ];

  getEmptyScheduler(date: Date, roomNumber: number) {
    const scheduler: SchedulerTable<IRepetition> = {
      today: new Date(),
      title: 'KУT Scheduler',
      room_number: roomNumber,
      columns: []
    };
    const columns = this.getEmptySchedulerColumns(date);
    columns.map((el) => {
      el.rows = this.getEmptySchedulerRaws(el, roomNumber);
      scheduler.columns.push(el);
    });
    return scheduler;
  }

  getEmptySchedulerRaws(column: SchedulerColumn, roomNumber: number) {
    const rows = [];
    this.schedulerRows.map((row, index) => {
      const r = {
        id: index,
        title: row.title,
        data: {
          date: column.date,
          room_number: roomNumber,
          start_time: row.title.split('-')[0],
          end_time: row.title.split('-')[1],
          approved: RepetitionStatus.open
        }
      };
      rows.push(r);
    });
    return rows;
  }
  getEmptySchedulerColumns(date: Date) {
    let columns = [...this.schedulerColumns];
    columns = columns.map((el) => {
      const d = new Date();
      const weekDay = date.getDay();
      const monthDay = date.getDate();
      if (el.id === -1) {
        return el;
      } else if (weekDay === el.id) {
        return { date: d, ...el };
      } else if (weekDay > el.id) {
        d.setDate(monthDay - (weekDay - el.id));
        return { date: d, ...el };
      } else if (weekDay < el.id) {
        d.setDate(monthDay + (el.id - weekDay));
        return { date: d, ...el };
      }
    });
    return columns;
  }

  constructor() {}
}
