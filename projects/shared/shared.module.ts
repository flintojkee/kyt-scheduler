import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputsModule } from './ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  SchedulerTableComponent,
  SchedulerColumnComponent,
  SchedulerRowComponent
} from './sections/scheduler-table';

@NgModule({
  declarations: [SchedulerTableComponent, SchedulerColumnComponent, SchedulerRowComponent],
  imports: [CommonModule, InputsModule, FormsModule, ReactiveFormsModule],
  exports: [InputsModule, FormsModule, ReactiveFormsModule, SchedulerTableComponent]
})
export class SharedModule {}
