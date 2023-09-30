import { Injectable, inject } from '@angular/core';
import { LocalStorageService } from "src/app/shared/services";
import { NavLinks,  } from '../../shared/models';
import { BehaviorSubject } from 'rxjs';
import { NavigationItem } from '../models';

@Injectable({
    providedIn: 'root'
})
export class NavigationMenuService {
    localStorageService = inject(LocalStorageService)
    menuStorageKey = 'menu-status';
    menuStatus$ = new BehaviorSubject(this.initialMenuStatus);

    get initialMenuStatus() {
        return this.localStorageService.getValue(this.menuStorageKey);
    }
    
    setMenuStatus(menuStatus: number): void {
        this.localStorageService.setValue(this.menuStorageKey, menuStatus.toString());
        this.menuStatus$.next(menuStatus.toString());
    }

    getMenuStatus() {
        return this.localStorageService.getValue(this.menuStorageKey);
    }

    getNavigationLinks(): NavigationItem[] {
        return NavLinks;
    }
}
