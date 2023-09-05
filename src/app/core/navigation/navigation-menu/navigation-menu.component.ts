import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationItemComponent } from "../navigation-item/navigation-item.component";
import { NavItemType, NavigationItem } from '../../models';
import { NavLinks } from '../navigation-links';
import { NavigationCollapsableComponent } from "../navigation-collapsable/navigation-collapsable.component";
import { NavigationGroupComponent } from "../navigation-group/navigation-group.component";
import { NavigationTabsComponent } from "../navigation-tabs/navigation-tabs.component";

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
    NavigationTabsComponent
  ]
})
export class NavigationMenuComponent implements OnInit {
  navItems!: NavigationItem[];
  navItemType = NavItemType;

  ngOnInit(): void {
    this.navItems = NavLinks;
  }

}
