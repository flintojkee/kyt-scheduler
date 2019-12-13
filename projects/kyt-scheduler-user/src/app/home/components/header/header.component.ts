import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '@kyt/shared/models';

@Component({
  selector: 'kyt-user-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() user: IUser;
  constructor() {}

  ngOnInit() {}
}
