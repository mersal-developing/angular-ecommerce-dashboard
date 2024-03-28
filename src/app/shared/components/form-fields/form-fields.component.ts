import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { FloatLabelType, MatFormFieldAppearance, MatFormFieldModule, SubscriptSizing } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { CdkTextareaAutosize, TextFieldModule } from '@angular/cdk/text-field';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { TranslationService } from '../../services';
import { InputFieldsTypes } from '../../models';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-form-fields',
  standalone: true,
  imports: [
    MatSelectModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatRadioModule,
    CommonModule,
    ReactiveFormsModule,
    TextFieldModule,
    MatDatepickerModule,
    TranslateModule
  ],
  templateUrl: './form-fields.component.html',
  styleUrl: './form-fields.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FormFieldsComponent {
  @Input() type!: string;
  @Input() label!: string;
  @Input() placeHolder!: string;
  @Input() optionList!: { name: string; value: any }[];
  @Input() fileTypes!: string;
  @Input() required!: boolean;
  @Input() actionButtonLabel!: boolean;
  @Input() formFieldAppearance: MatFormFieldAppearance = 'fill';
  @Input() floatLabel: FloatLabelType = 'auto';
  @Input() subscriptSizing: SubscriptSizing = 'dynamic';
  @Input() classNames!: string[];
  @Input() textAreaMinRow!: number;
  @Input() textAreaMaxRow!: number;
  @Input() preIcon!: boolean;
  @Input() postIcon!: boolean;
  @Input() icon!: string;
  @Input() readOnly!: boolean;
  @Input() minValue!: number;
  @Input() disabled!: boolean;

  @ViewChild('autosize') autosize!: CdkTextareaAutosize;

  translationService = inject(TranslationService);
  inputFieldTypes = InputFieldsTypes;


  @HostBinding('class') get hostClasses(): string {
    
      return this.classNames.length > 0 ? this.classNames.join(' ') : ''
  }
}
