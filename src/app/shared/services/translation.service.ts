import { Injectable, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { DOCUMENT } from "@angular/common";
import { LocalStorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  translate = inject(TranslateService);
  document = inject(DOCUMENT);
  localStorage = inject(LocalStorageService);

  private language$ = new BehaviorSubject<string>(this.defaultLanguage);
  public currentLangObservable = this.language$.asObservable()

  get defaultLanguage(): string {
    if (this.localStorage.getValue('lang') !== null) return this.localStorage.getValue('lang') as string;
    else return this.translate.getDefaultLang()
  }

  constructor() {
    this.checkForLanguageChange();
    this.saveLanguageToStorage();
    this.setInitialLanguage();
    this.setPageDirection();
  }

  setInitialLanguage(): void {
    this.translate.use(this.defaultLanguage);
  }

  checkForLanguageChange(): void {
    this.translate.onLangChange
      .pipe(takeUntilDestroyed())
      .subscribe((val: LangChangeEvent) => {
        this.language$.next(val.lang);
        this.saveLanguageToStorage();
        this.setPageDirection();
      })
  }

  getAllLanguages(): string[] {
    return this.translate.getLangs();
  }

  changeLanguage(lang: string): void {
    this.translate.use(lang);
    this.language$.next(lang);
  }

  getPageDirection(): string {
    return this.language$.value === 'ar' ? 'rtl' : 'ltr';
  }

  isRtl(): boolean {
    return this.language$.value === 'ar';
  }

  isLtr(): boolean {
    return this.language$.value === 'en';
  }

  setPageDirection(): void {
    const dirClass = this.getPageDirection();
    const removedClass = this.language$.value === 'ar' ? 'ltr' : 'rtl';

    this.document.documentElement.classList.remove(removedClass);
    this.document.documentElement.classList.add(dirClass);
    this.document.documentElement.lang = this.language$.value;
    this.document.documentElement.dir = dirClass;
  }

  saveLanguageToStorage(): void {
    this.localStorage.setValue('lang', this.language$.value);
  }

}
