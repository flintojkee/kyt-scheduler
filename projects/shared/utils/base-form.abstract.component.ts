import { OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

import { FormGroup, AbstractControl } from '@angular/forms';
import { IFormComponent } from '../models/form-component.interface';
import { validateForm } from '../helpers';

export abstract class BaseFormComponent<T> implements IFormComponent<T> {
  @Input() formGroup: FormGroup;
  @Output() submittedForm = new EventEmitter<T>();
  initFormControls(formGroup: FormGroup, props: any) {
    props.map((el) => {
      this[el] = formGroup.get(el);
    });
  }
  @validateForm('formGroup')
  onSubmit(formData: T): void {
    this.submittedForm.emit(formData);
  }
}
