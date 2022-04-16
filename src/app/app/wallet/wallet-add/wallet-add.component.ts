import {Component, EventEmitter, Output} from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { TuiDay } from '@taiga-ui/cdk';
import {Purchase} from '../../../../shared/models/Purchase';

function isInvalid(input: AbstractControl | null): boolean {
  return input !== null && input.invalid && input.touched;
}

@Component({
  selector: 'app-wallet-add',
  templateUrl: './wallet-add.component.html',
  styleUrls: ['./wallet-add.component.less']
})
export class WalletAddComponent {
  @Output()
  add = new EventEmitter<Purchase>();

  constraints = {
    minLengthTitle: 3,
    maxLengthTitle: 80,
    minPrice: 10,
    maxPrice: 10000,
  }

  form = this.fb.group({
    inputTitle: [null, [
      Validators.required,
      Validators.minLength(this.constraints.minLengthTitle),
      Validators.maxLength(this.constraints.maxLengthTitle)
    ]],
    inputPrice: [null, [
      Validators.required,
      Validators.min(this.constraints.minPrice),
      Validators.max(this.constraints.maxPrice),
      Validators.pattern(/^[0-9]+$/)
    ]],
    inputDate: [null],
    inputComment: [null],
  });

  constructor(private fb: FormBuilder) { }

  get titleError(): string | undefined {
    const input = this.form.get('inputTitle');

    if (input?.errors?.['required']) {
      return 'Поле обязательно для заполнения';
    }
    if (input?.errors?.['minlength']) {
      return `Минимальная длина ${this.constraints.minLengthTitle}`;
    }
    if (input?.errors?.['maxlength']) {
      return `Максимальная длина ${this.constraints.maxLengthTitle}`;
    }
    return undefined;
  }

  get priceError(): string | undefined {
    const input = this.form.get('inputPrice');

    if (input?.errors?.['required']) {
      return 'Поле обязательно для заполнения';
    }
    if (input?.errors?.['min']) {
      return `Минимальное значение ${this.constraints.minPrice}`;
    }
    if (input?.errors?.['max']) {
      return `Максимальное значение ${this.constraints.maxPrice}`;
    }
    if (input?.errors?.['pattern']) {
      return 'Pазрешены лишь цифры';
    }
    return undefined;
  }

  getInvalid(inputName: string): boolean {
    return isInvalid(this.form.get(inputName));
  }

  submit(): void {

    const formData = this.form.getRawValue();

    const purchase = {
      title: formData['inputTitle'],
      price: formData['inputPrice'],
      date: formData['inputDate'] ? formData['inputDate'] : TuiDay.currentLocal(),
    }

    const comment = formData['inputComment'];
    
    const result = Object.assign({...purchase}, comment && {comment});
    
    this.add.emit(result);

    this.form.reset();
  }

}
