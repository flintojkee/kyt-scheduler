import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SchedulerTable, SchedulerRow } from '@kyt/shared/sections/scheduler-table';
import { IRepetition, IUser } from '@kyt/shared/models';
import { HomeStoreService } from '../services/store/home-store.service';
import { UserPopupService } from '../modules/user-popup';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { take } from 'rxjs/operators';

@Component({
  selector: 'kyt-user-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  table$: Observable<SchedulerTable<IRepetition>>;
  user: IUser;

  constructor(
    private homeStoreService: HomeStoreService,
    private userPopupService: UserPopupService
  ) {}

  ngOnInit() {
    this.table$ = this.homeStoreService.getSchedulerState();
    this.homeStoreService
      .getUserState()
      .pipe(untilDestroyed(this))
      .subscribe((user) => {
        this.user = user;
      });
  }

  ngOnDestroy() {}

  showEnrollPopup(row: SchedulerRow) {
    this.userPopupService
      .showPopup<SchedulerRow<IRepetition>>(['enrollRepetition', { row, user: this.user }])
      .pipe(
        take(1),
        untilDestroyed(this)
      )
      .subscribe((r) => {
        this.homeStoreService.dispatchSchedulerRow(r);
      });
  }
}
