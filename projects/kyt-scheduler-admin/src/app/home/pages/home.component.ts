import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SchedulerTable, SchedulerRow } from '@kyt/shared/sections/scheduler-table';
import { IRepetition, RepetitionStatus } from '@kyt/shared/models';
import { HomeStoreService } from '../services/store/home-store.service';

@Component({
  selector: 'kyt-admin-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  table$: Observable<SchedulerTable<IRepetition>>;

  constructor(private homeStoreService: HomeStoreService) {}

  ngOnInit() {
    this.table$ = this.homeStoreService.getSchedulerState();
    const row: SchedulerRow<IRepetition> = {
      id: 2,
      title: '09:30-10:00',
      data: {
        date: new Date('Thu Dec 19 2019 09:30:05'),
        room_number: 1,
        start_time: '09:30',
        end_time: '10:00',
        approved: RepetitionStatus.review,
        user_id: 1
      }
    };
    this.homeStoreService.dispatchSchedulerRow(row);
  }

  showEnrollPopup(row: SchedulerRow) {
    console.log(row);
  }
}
