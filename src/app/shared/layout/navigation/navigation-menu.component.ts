import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { UtilitiesService } from 'src/app/shared/services/utilities.service';
import { NavigationItem, NavItemType, MenuOpenStatus } from 'src/app/shared/layout/navigation/models/navigation.types';
import { NavigationItemComponent } from './navigation-item/navigation-item.component';
import { NavigationCollapsableComponent } from './navigation-collapsable/navigation-collapsable.component';
import { NavigationGroupComponent } from './navigation-group/navigation-group.component';
import { NavigationTabsComponent } from './navigation-tabs/navigation-tabs.component';
import { NavLinks } from './models';

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
  utilitiesService = inject(UtilitiesService);

  navItems!: NavigationItem[];
  navItemType = NavItemType;
  menuStatus!: number;

  get savedMenuStatus(): string | null {
    const menuStatus = this.utilitiesService.getLocalStorageItem('menu-status');
    if (menuStatus !== null) {
      return menuStatus;
    } else {
      return null;
    }
  }

  get shouldMenuClosed(): boolean | null {
    if (!this.savedMenuStatus) {
      return null;
    }
    return parseInt(this.savedMenuStatus) === MenuOpenStatus.Closed;
  }

  get isMenuClosed(): boolean {
    return this.menuStatus === MenuOpenStatus.Closed;
  }

  ngOnInit(): void {
    this.getNavigationLinks();
    this.setInitilaMenuStatus();
  }

  getNavigationLinks(): void {
    this.navItems = NavLinks;
  }

  setInitilaMenuStatus(): void {
    this.menuStatus = this.savedMenuStatus ? parseInt(this.savedMenuStatus) : MenuOpenStatus.Open;
  }

  openMenu(): void {
    this.menuStatus = MenuOpenStatus.Open;
  }

  closeMenu(): void {
    this.menuStatus = MenuOpenStatus.Closed;
  }

  changeMenuStatus(): void {
    (this.savedMenuStatus && (parseInt(this.savedMenuStatus) === MenuOpenStatus.Closed)) ? this.openMenu() : this.closeMenu();
    this.saveMenuStatus();
  }

  saveMenuStatus(): void {
    this.utilitiesService.setLocalStorageItem('menu-status', this.menuStatus.toString());
  }

}
