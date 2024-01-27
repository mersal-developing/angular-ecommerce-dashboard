import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { DOCUMENT } from "@angular/common";
import { LocalStorageService } from './localstorage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  translate = inject(TranslateService);
  document = inject(DOCUMENT);
  localStorage = inject(LocalStorageService);
  router = inject(Router);

  private language$ = new BehaviorSubject<string>(this.defaultLanguage);
  public currentLangObservable = this.language$.asObservable()

  get defaultLanguage(): string {
    if (this.localStorage.getValue('lang') !== null) return this.localStorage.getValue('lang') as string;
    else return this.translate.getDefaultLang()
  }

  get isRtl(): boolean {
    return this.language$.value === 'ar';
  }

  get isLtr(): boolean {
    return this.language$.value === 'en';
  }

  constructor() {
    this.setInitialLanguage();
    this.setPageDirection();
  }

  setInitialLanguage(): void {
    this.translate.use(this.defaultLanguage);
  }

  getAllLanguages(): string[] {
    return this.translate.getLangs();
  }

  changeLanguage(lang: string): void {
    this.language$.next(lang);
    this.saveLanguageToStorage();
    this.reloadPage();
  }

  getPageDirection(): string {
    return this.isRtl ? 'rtl' : 'ltr';
  }

  setPageDirection(): void {
    const dirClass = this.getPageDirection();
    const removedClass = this.isRtl ? 'ltr' : 'rtl';

    this.document.documentElement.classList.remove(removedClass);
    this.document.documentElement.classList.add(dirClass);
    this.document.documentElement.lang = this.language$.value;
    this.document.documentElement.dir = dirClass;
  }

  saveLanguageToStorage(): void {
    this.localStorage.setValue('lang', this.language$.value);
  }

  reloadPage() {
    this.router.navigate([], {
      queryParamsHandling: 'merge'
    });

    setTimeout(() => location.reload())
  }

}
