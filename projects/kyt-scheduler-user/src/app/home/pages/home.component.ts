import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SchedulerTable, SchedulerRow } from '@kyt/shared/sections/scheduler-table';
import { IRepetition, IUser, RepetitionStatus } from '@kyt/shared/models';
import { HomeStoreService } from '../services/store/home-store.service';
import { UserPopupService } from '../modules/user-popup';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { take, switchMap } from 'rxjs/operators';
import { AuthStoreService } from '@kyt-user/auth/services/store/auth-store.service';
import { HomeService } from '../services/api/home.service';

@Component({
  selector: 'kyt-user-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  table: SchedulerTable<IRepetition>;
  user: IUser;

  constructor(
    private homeStoreService: HomeStoreService,
    private userPopupService: UserPopupService,
    private authStoreService: AuthStoreService,
    private homeService: HomeService
  ) {}

  ngOnInit() {
    this.homeStoreService
      .getSchedulerState()
      .pipe(untilDestroyed(this))
      .subscribe((table) => {
        if (table) {
          this.table = JSON.parse(JSON.stringify(table));
        }
      });
    this.authStoreService
      .getUserState()
      .pipe(untilDestroyed(this))
      .subscribe((user) => {
        this.user = { ...user };
      });
    this.homeService
      .getRepetitions()
      .pipe(untilDestroyed(this))
      .subscribe((res: any) => {
        const repetitions = res.data.repetitions.filter(
          (r) => r.approved !== RepetitionStatus.declined
        );
        console.log(res);
        repetitions.map((r) => {
          this.homeStoreService.dispatchSchedulerRowData(r);
        });
      });
  }

  ngOnDestroy() {}

  showEnrollPopup(row: SchedulerRow<IRepetition>) {
    if (row.data.approved === RepetitionStatus.open) {
      this.userPopupService
        .showPopup<SchedulerRow<IRepetition>>(['enrollRepetition', { row, user: this.user }])
        .pipe(
          take(1),
          switchMap((r) => this.homeService.updateRepetition(r.data, +this.user.user_id)),
          untilDestroyed(this)
        )
        .subscribe((res) => {
          console.log(res);
          //this.homeStoreService.dispatchSchedulerRow(r);
        });
    }
  }
}
