import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { TranslationService } from 'src/app/services';
import { Observable } from 'rxjs';
import { LanguagePipe } from "src/app/pipes/language.pipe";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-language-button',
  standalone: true,
  templateUrl: './language-button.component.html',
  styleUrls: ['./language-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatMenuModule, LanguagePipe, MatIconModule]
})
export class LanguageButtonComponent {
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
