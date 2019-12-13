import { Component, OnInit, Input } from '@angular/core';
import { UserPopupService, EnrollRepetitionData } from '../../services/user-popup.service';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

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
      number_of_people: '3'
    };
    this.userPopupService.closePopup(repetition);
  }
}
