import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SchedulerTable, SchedulerRow } from '@kyt/shared/sections/scheduler-table';
import { IRepetition, RepetitionStatus, IUser, IAdmin } from '@kyt/shared/models';
import { HomeStoreService } from '../services/store/home-store.service';
import { AdminPopupService } from '../modules/admin-popup';
import { take, switchMap } from 'rxjs/operators';
import { HomeService } from '../services/api/home.service';
import { AuthStoreService } from '@kyt-admin/auth/services/store/auth-store.service';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'kyt-admin-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  table: SchedulerTable<IRepetition>;
  user: IAdmin;
  constructor(
    private homeStoreService: HomeStoreService,
    private adminPopupService: AdminPopupService,
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
        console.log(res);
        const repetitions = res.data.repetitions.filter(
          (r) => r.approved !== RepetitionStatus.declined
        );
        repetitions.map((r) => {
          this.homeStoreService.dispatchSchedulerRowData(r);
        });
      });
  }
  ngOnDestroy() {}

  showEditPopup(row: SchedulerRow<IRepetition>) {
    if (row.data.approved !== RepetitionStatus.open) {
      this.adminPopupService
        .showPopup(['repetition-edit', { repetition: row.data, admin: this.user }])
        .pipe(
          take(1),
          switchMap((popupAnswer: any) => this.homeService.updateRepetition(popupAnswer))
        )
        .subscribe(({ data }: any) => {
          this.homeStoreService.dispatchSchedulerRowData(data.repetition);
        });
    }
  }
}
