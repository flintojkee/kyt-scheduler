import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputsModule, PopupCoreComponent, DropdownMenuComponent } from './ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  SchedulerTableComponent,
  SchedulerColumnComponent,
  SchedulerRowComponent
} from './sections/scheduler-table';

@NgModule({
  declarations: [
    PopupCoreComponent,
    SchedulerTableComponent,
    SchedulerColumnComponent,
    SchedulerRowComponent,
    DropdownMenuComponent
  ],
  imports: [CommonModule, InputsModule, FormsModule, ReactiveFormsModule],
  exports: [
    InputsModule,
    FormsModule,
    ReactiveFormsModule,
    SchedulerTableComponent,
    PopupCoreComponent,
    DropdownMenuComponent
  ]
})
export class SharedModule {}
