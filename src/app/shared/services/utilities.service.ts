import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  setLocalStorageItem(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  }

  getLocalStorageItem(key: string): string | null {
    return window.localStorage.getItem(key);
  }

  removeLocalStorageItem(key: string): void {
    window.localStorage.removeItem(key);
  }
}
