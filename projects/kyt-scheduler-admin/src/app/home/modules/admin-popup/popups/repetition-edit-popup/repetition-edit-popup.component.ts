import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { IRepetition, RepetitionStatus, IAdmin, IUser } from '@kyt/shared/models';
import { AdminPopupService } from '../../services/admin-popup.service';
import { HomeService } from '@kyt-admin/home/services/api/home.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Observable } from 'rxjs';

export interface RepetitionEditData {
  repetition: IRepetition;
  admin: IAdmin;
}

@Component({
  selector: 'kyt-admin-repetition-edit-popup',
  templateUrl: './repetition-edit-popup.component.html',
  styleUrls: ['./repetition-edit-popup.component.scss']
})
export class RepetitionEditPopupComponent implements OnInit, OnDestroy {
  @Input() inputData: RepetitionEditData;
  user$: Observable<any>;
  constructor(private adminPopupService: AdminPopupService, private homeService: HomeService) {}

  ngOnInit() {
    this.user$ = this.homeService.getUser(this.inputData.repetition.user_id);
  }
  ngOnDestroy() {}

  closePopup() {
    this.adminPopupService.closePopup();
  }
  declineRepetition() {
    this.adminPopupService.closePopup({
      admin_id: this.inputData.admin.admin_id,
      repetition_id: this.inputData.repetition.repetition_id,
      approved: RepetitionStatus.declined
    });
  }
  submitRepetition() {
    this.adminPopupService.closePopup({
      admin_id: this.inputData.admin.admin_id,
      repetition_id: this.inputData.repetition.repetition_id,
      approved: RepetitionStatus.approved
    });
  }
}
