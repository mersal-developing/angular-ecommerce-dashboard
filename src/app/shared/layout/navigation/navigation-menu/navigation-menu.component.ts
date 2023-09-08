import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationItemComponent } from "../navigation-item/navigation-item.component";
import { NavLinks } from '../navigation-links';
import { NavigationCollapsableComponent } from "../navigation-collapsable/navigation-collapsable.component";
import { NavigationGroupComponent } from "../navigation-group/navigation-group.component";
import { NavigationTabsComponent } from "../navigation-tabs/navigation-tabs.component";
import { MatIconModule } from '@angular/material/icon';
import { UtilitiesService } from 'src/app/shared/services/utilities.service';
import { NavigationItem, NavItemType, MenuStatus } from 'src/app/shared/models/navigation.types';

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
  menuOpenStatus = MenuStatus;

  ngOnInit(): void {
    this.getNavigationLinks();
    this.setInitilaMenuStatus();
  }

  getNavigationLinks() {
    this.navItems = NavLinks;
  }

  setInitilaMenuStatus() {
    const menuSatus = this.utilitiesService.getLocalStorageItem('menu-status');
    this.menuStatus = menuSatus ? parseInt(menuSatus) : MenuStatus.Open;
  }

  changeMenuStatus() {
    this.menuStatus = (this.menuStatus === MenuStatus.Open) ? MenuStatus.Closed : MenuStatus.Open;

    this.utilitiesService.setLocalStorageItem('menu-status', this.menuStatus.toString());    
  }

  openMenu() {
    this.menuStatus = MenuStatus.Open;
  }

  closeMenu() {
    const menuSatus = this.utilitiesService.getLocalStorageItem('menu-status');
    this.menuStatus = (menuSatus && parseInt(menuSatus) === MenuStatus.Closed) ? MenuStatus.Closed : MenuStatus.Open;
  }

}
