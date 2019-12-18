import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home.component';
import { SharedModule } from '@kyt/shared';
import { AdminPopupModule } from './modules/admin-popup/admin-popup.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, AdminPopupModule]
})
export class HomeModule {}
