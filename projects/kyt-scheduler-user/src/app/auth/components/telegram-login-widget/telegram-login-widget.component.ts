import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStoreService } from '@kyt-user/auth/services/store/auth-store.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { IUser } from '@kyt/shared/models';
import { AuthService } from '@kyt-user/auth/services/api/auth.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'kyt-user-telegram-login-widget',
  templateUrl: './telegram-login-widget.component.html',
  styleUrls: ['./telegram-login-widget.component.scss']
})
export class TelegramLoginWidgetComponent implements OnInit, AfterViewInit {
  constructor(
    private ngZone: NgZone,
    private router: Router,
    private authStoreService: AuthStoreService,
    private authService: AuthService
  ) {}
  @ViewChild('script', { static: true }) script: ElementRef;

  convertToScript() {
    const element = this.script.nativeElement;
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?7';
    script.setAttribute('data-telegram-login', 'KutSchedulerBot');
    script.setAttribute('data-size', 'large');
    // Callback function in global scope
    script.setAttribute('data-onauth', 'loginViaTelegram(user)');
    script.setAttribute('data-request-access', 'write');
    element.parentElement.replaceChild(script, element);
  }
  ngOnInit() {
    window['loginViaTelegram'] = (loginData) => this.loginViaTelegram(loginData);
  }
  private loginViaTelegram(loginData: TelegramLoginData) {
    this.ngZone.run(() => {
      const { last_name, first_name, id, username, photo_url } = loginData;
      const user: IUser = { last_name, first_name, user_id: id, username, photo_url };
      this.authStoreService.dispatchUser(user);
      this.authService
        .login(loginData)
        .pipe(take(1))
        .subscribe((res) => console.log(res));
      this.router.navigate(['home']);
    });
  }
  ngAfterViewInit() {
    this.convertToScript();
  }
}

export interface TelegramLoginData {
  id: string;
  first_name?: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  auth_date: string;
  hash: string;
}
