import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages';
import { AuthComponent } from './auth.component';
import { TelegramLoginWidgetComponent } from './components/telegram-login-widget/telegram-login-widget.component';
import { SharedModule } from '@kyt/shared';

@NgModule({
  declarations: [AuthComponent, LoginComponent, TelegramLoginWidgetComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule]
})
export class AuthModule {}
