import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home.component';
import { SharedModule } from '@kyt/shared';
import { AdminPopupModule } from './modules/admin-popup/admin-popup.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, AdminPopupModule]
})
export class HomeModule {}
