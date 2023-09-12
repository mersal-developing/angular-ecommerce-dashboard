import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    setValue(key: string, value: string): void {
        window.localStorage.setItem(key, value);
    }

    getValue(key: string): string | null {
        return window.localStorage.getItem(key);
    }

    removeValue(key: string): void {
        window.localStorage.removeItem(key);
    }
}
