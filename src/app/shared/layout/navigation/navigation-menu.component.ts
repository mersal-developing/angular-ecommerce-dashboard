import { ChangeDetectionStrategy, Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, skip } from 'rxjs';

import { NavigationItem, NavItemType, MenuOpenStatus } from 'src/app/shared/layout/navigation/models/navigation.types';
import { NavigationItemComponent } from './navigation-item/navigation-item.component';
import { NavigationCollapsableComponent } from './navigation-collapsable/navigation-collapsable.component';
import { NavigationGroupComponent } from './navigation-group/navigation-group.component';
import { NavigationTabsComponent } from './navigation-tabs/navigation-tabs.component';
import { LocalStorageService } from '../../services/localstorage.service';
import { NavigationMenuService } from './navigation.service';
import { UtilitiesService } from '../../services/utilities.service';

@Component({
  selector: 'app-navigation-menu',
  standalone: true,
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    NavigationItemComponent,
    NavigationCollapsableComponent,
    NavigationGroupComponent,
    NavigationTabsComponent,
    MatIconModule
  ]
})
export class NavigationMenuComponent implements OnInit {
  localStorageService = inject(LocalStorageService);
  navigationMenuService = inject(NavigationMenuService);
  utilitiesService = inject(UtilitiesService);
  cdr = inject(ChangeDetectorRef);
  mediaMatcher = inject(MediaMatcher);

  navItems!: NavigationItem[];
  navItemType = NavItemType;
  menuStatus!: number;
  isMobileView = false;

  /**
   * Retrieves the saved menu status from local storage or returns the default value if not found.
   * @returns {number} The menu status value.
  */

  get savedMenuStatus(): number {
    const menuStatu = this.navigationMenuService.getMenuStatus();

    if (menuStatu !== null) return this.utilitiesService.getNumber(menuStatu)
    else return MenuOpenStatus.Opened;
  }

  /**
   * Checks whether the menu should be closed based on the saved menu status in local storage.
   * Use this status to determine whether the menu should be closed on mouse leave.
   * @returns {boolean | null} Returns `true` if the menu should be closed,
   * `false` if it should remain open, or `null` if no specific status is found.
  */

  get shouldMenuClosed(): boolean {
    return this.savedMenuStatus === MenuOpenStatus.Closed;
  }

  /**
   * Checks if the menu is currently in a closed state.
   * @returns {boolean} Returns `true` if the menu is closed, otherwise `false`.
  */

  get isMenuClosed(): boolean {
    return this.menuStatus === MenuOpenStatus.Closed;
  }

  constructor() {
    this.subscribeToMenuStatusChanges();
  }

  ngOnInit(): void {
    this.getNavigationLinks();
    this.setInitilaMenuStatus();
  }

  getNavigationLinks(): void {
    this.navItems = this.navigationMenuService.getNavigationLinks();
  }

  setInitilaMenuStatus(): void {
    this.menuStatus = this.savedMenuStatus;
  }

  openMenu(): void {
    this.menuStatus = MenuOpenStatus.Opened;
  }

  closeMenu(): void {
    this.menuStatus = MenuOpenStatus.Closed;
  }

  changeMenuStatus(): void {
    (this.savedMenuStatus === MenuOpenStatus.Closed) ? this.openMenu() : this.closeMenu();
    this.navigationMenuService.setMenuStatus(this.menuStatus);
  }

  /**
   * Handles actions to be taken when the menu status changes from another component.
  */

  subscribeToMenuStatusChanges() {
    const mediaQueryList = this.mediaMatcher.matchMedia('(min-width: 1px) and (max-width: 1024px)');
    if (mediaQueryList.matches) this.navigationMenuService.setMenuStatus(0); //to prevent menu from opening in case of initial value is 1 

    this.navigationMenuService.menuStatus$
      .pipe(
        takeUntilDestroyed(),
        filter(val => val !== null && mediaQueryList.matches),
      )
      .subscribe(val => {
        if (val === MenuOpenStatus.Opened.toString()) {
          this.isMobileView = true;
        } else if (val === MenuOpenStatus.Closed.toString()) {
          this.closeMenu();
          this.isMobileView = false;
        }
        this.cdr.markForCheck();
      });
  }

}
