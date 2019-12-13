import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, NgZone } from '@angular/core';

@Component({
  selector: 'kyt-user-telegram-login-widget',
  templateUrl: './telegram-login-widget.component.html',
  styleUrls: ['./telegram-login-widget.component.scss']
})
export class TelegramLoginWidgetComponent implements OnInit, AfterViewInit {
  constructor(private ngZone: NgZone) {}
  @ViewChild('script', { static: true }) script: ElementRef;

  convertToScript() {
    const element = this.script.nativeElement;
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?5';
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
    this.ngZone.run(() => console.log(loginData));
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
