import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Observable, debounceTime, fromEvent, merge } from 'rxjs';
import { IUser } from 'src/app/interfaces/user.interface';
import { GenericValidator } from 'src/app/validators/generic-validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, AfterViewInit {

  
  user: IUser = {
    name: '',
    dateOfBirth: '',
    age: '',
    phoneNumber: '',
    dni: ''
  };
  showModal: boolean = false;
  
  // Form Validations
  userForm: FormGroup = this.fb.group({});
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[] = [];
  userMessage: { [key: string]: string } = {};
  private genericValidator: GenericValidator;
  private validationMessages: { [key: string]: { [key: string]: string } };

  constructor(
    private fb: FormBuilder
  ) {
    this.validationMessages = {
      name: {
        required: 'Nombre requerido',
      },
      dateOfBirth: {
        required: 'Fecha de nacimiento requerido',
      },
      age: {
        required: 'Edad requerida',
      },
      phoneNumber: {
        required: 'Teléfono requerido',
      },
      dni: {
        required: 'DNI requerido',
      }
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit(): void {
    this.initForm();
  }

  ngAfterViewInit(): void {
    const controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));


    merge(this.userForm.valueChanges, ...controlBlurs).pipe(debounceTime(500)).subscribe((value) => {
      this.userMessage = this.genericValidator.processMessages(this.userForm);
    });
  }

  initForm() {
    this.userForm = this.fb.group({
      name: [ '', Validators.required],
      dateOfBirth: [ '', Validators.required],
      age: [ '', Validators.required],
      phoneNumber: [ '', Validators.required],
      dni: [ '', Validators.required],
    });
  }

  onSubmit() {
    if (this.userForm.invalid) {
      Object.values(this.userForm.controls).forEach(control => {
        control.markAsTouched();
      });

      this.userMessage = this.genericValidator.processMessages(this.userForm);
    } else {
      this.user = this.userForm.value;
      this.showModal = true;
    }
  }

  close(event: any) {
    this.showModal = event;
  }
}
