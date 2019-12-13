import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'kyt-popup-core',
  templateUrl: './popup-core.component.html',
  styleUrls: ['./popup-core.component.scss']
})
export class PopupCoreComponent implements OnInit {

  @Input() closable = true;
  @Output() popupClose = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  closePopup() {
    this.popupClose.emit();
  }
}
