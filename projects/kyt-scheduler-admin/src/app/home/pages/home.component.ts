import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SchedulerTable, SchedulerRow } from '@kyt/shared/sections/scheduler-table';
import { IRepetition } from '@kyt/shared/models';
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
  }

  showEnrollPopup(row: SchedulerRow) {
    console.log(row);
  }
}
