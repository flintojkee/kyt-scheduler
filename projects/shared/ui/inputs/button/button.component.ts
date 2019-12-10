import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'kyt-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() type: 'default' = 'default';
  @Input() color: 'basic' | 'primary' = 'basic';
  @Input() isDisabled: boolean;
  @Input() label: string;
  @Input() iconPos: 'left' | 'right' = 'left';
  @Input() icon: string;
  @Input() isLoading = false;
  @Input() buttonType: 'button' | 'reset' | 'submit' = 'button';
  @Output() clicked: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
