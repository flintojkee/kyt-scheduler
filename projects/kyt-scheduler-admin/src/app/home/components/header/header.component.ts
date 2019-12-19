import { Component, OnInit, Input } from '@angular/core';
import { IUser, IAdmin } from '@kyt/shared/models';

@Component({
  selector: 'kyt-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() user: IAdmin;
  constructor() {}

  ngOnInit() {}
}
