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

import { TranslateModule } from '@ngx-translate/core';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { CdkEditorComponent } from '../cdk-editor/cdk-editor.component';
import { TranslationService } from 'src/app/services';
import { InputFieldsTypes } from 'src/app/models';

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
    TranslateModule,
    CdkEditorComponent
  ],
  providers: [provideNativeDateAdapter(), { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
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
  @Input() textPrefix!: string;
  @Input() iconPrefix!: string;
  @Input() textSuffix!: string;
  @Input() iconSuffix!: string;
  @Input() readOnly!: boolean;
  @Input() minValue!: number;
  @Input() disabled!: boolean;
  @Input() hideNumberSpinner!:boolean;

  @ViewChild('autosize') autosize!: CdkTextareaAutosize;

  translationService = inject(TranslationService);
  inputFieldTypes = InputFieldsTypes;


  @HostBinding('class') get hostClasses(): string {
    
      return (this.classNames && this.classNames.length > 0) ? this.classNames.join(' ') : ''
  }
}
