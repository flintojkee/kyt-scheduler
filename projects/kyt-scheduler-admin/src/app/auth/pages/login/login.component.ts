import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kyt-admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../shared/styles/auth-pages.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
}
