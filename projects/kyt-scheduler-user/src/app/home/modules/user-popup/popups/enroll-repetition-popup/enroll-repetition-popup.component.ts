import { Component, OnInit, Input } from '@angular/core';
import { UserPopupService, EnrollRepetitionData } from '../../services/user-popup.service';
import { RepetitionStatus } from '@kyt/shared/models';

@Component({
  selector: 'kyt-user-enroll-repetition-popup',
  templateUrl: './enroll-repetition-popup.component.html',
  styleUrls: ['./enroll-repetition-popup.component.scss']
})
export class EnrollRepetitionPopupComponent implements OnInit {
  @Input() inputData: EnrollRepetitionData;

  constructor(private userPopupService: UserPopupService) {}

  ngOnInit() {}

  closePopup() {
    this.userPopupService.closePopup();
  }
  submitPopup() {
    const repetition = {
      ...this.inputData.row,
      user_id: this.inputData.user.user_id,
      data: { ...this.inputData.row.data, approved: RepetitionStatus.approved },
      number_of_people: '3'
    };
    this.userPopupService.closePopup(repetition);
  }
}
