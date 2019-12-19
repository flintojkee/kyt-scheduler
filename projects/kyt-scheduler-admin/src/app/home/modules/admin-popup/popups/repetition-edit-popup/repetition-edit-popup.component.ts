import { Component, OnInit, Input } from '@angular/core';
import { IRepetition, RepetitionStatus } from '@kyt/shared/models';
import { AdminPopupService } from '../../services/admin-popup.service';

@Component({
  selector: 'kyt-admin-repetition-edit-popup',
  templateUrl: './repetition-edit-popup.component.html',
  styleUrls: ['./repetition-edit-popup.component.scss']
})
export class RepetitionEditPopupComponent implements OnInit {
  @Input() inputData: IRepetition;

  constructor(private adminPopupService: AdminPopupService) {}

  ngOnInit() {}

  closePopup() {
    this.adminPopupService.closePopup();
  }
  declineRepetition() {
    this.adminPopupService.closePopup({
      repetition_id: this.inputData.repetition_id,
      approved: RepetitionStatus.declined
    });
  }
  submitRepetition() {
    this.adminPopupService.closePopup({
      repetition_id: this.inputData.repetition_id,
      approved: RepetitionStatus.approved
    });
  }
}
