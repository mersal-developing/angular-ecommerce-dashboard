import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { TranslationService } from 'src/app/services';
import { Observable } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { LanguagePipe } from 'src/app/core/pipes/language.pipe';

@Component({
    selector: 'app-language-button',
    templateUrl: './language-button.component.html',
    styleUrls: ['./language-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, MatMenuModule, LanguagePipe, MatIconModule]
})
export class LanguageButtonComponent implements OnInit{
  translationService = inject(TranslationService);
  languages!: string[];
  currentLanguage!: Observable<string | undefined>;

  ngOnInit() {
    this.getAllLAnguages();
    this.getCurrentLanguage();
  }

  getAllLAnguages() {
    this.languages = this.translationService.getAllLanguages();
  }

  getCurrentLanguage() {
    this.currentLanguage = this.translationService.currentLangObservable;
  }

  switchLang(lang: string) {
    this.translationService.changeLanguage(lang)
  }
}
