import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { FormTemplate } from 'src/app/types/form-template';
import User from 'src/app/types/user';

@Component({
  selector: 'app-form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrls: ['./form-wrapper.component.scss']
})
export class FormWrapperComponent implements OnInit {
  @Input() formTemplate!: FormTemplate[];
  @Output() submit: EventEmitter<User> = new EventEmitter();

  form!: FormGroup;

  toggleOn: boolean = true;
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    let formObj: any = {};
    console.log(this.formTemplate);

    this.formTemplate.forEach(field => {
      let validators: ValidatorFn[] = [];
      console.log(field);
      if(field.required) validators.push(Validators.required);
      if(field.minLength) validators.push(Validators.minLength(field.minLength));
      if(field.email) validators.push(Validators.email);
      console.log(validators);
      formObj[field.ctrlName] = this._fb.nonNullable.control(field.defaultValue, {
        validators
      });
    });
    this.form = this._fb.nonNullable.group(formObj);

  }

  clearInput = ($inputCtrl: AbstractControl | null) => {
    $inputCtrl?.reset();
  }

  handleToggleBtn() {
    this.toggleOn = !this.toggleOn;
  }

  onSubmit($event: Event) {
    $event.stopPropagation();
    this.submit.emit(this.form.value);
  }

}
