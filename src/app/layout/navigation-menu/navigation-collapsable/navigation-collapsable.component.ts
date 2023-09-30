import { MatIconModule } from '@angular/material/icon';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationItemComponent } from '../navigation-item/navigation-item.component';
import { NavigationTabsComponent } from "../navigation-tabs/navigation-tabs.component";
import { TranslateModule } from '@ngx-translate/core';
import { NavigationItem, NavItemType } from '../../models';

@Component({
    selector: 'app-navigation-collapsable',
    standalone: true,
    templateUrl: './navigation-collapsable.component.html',
    styleUrls: ['./navigation-collapsable.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, NavigationItemComponent, MatIconModule, NavigationTabsComponent, TranslateModule]
})
export class NavigationCollapsableComponent {
  @Input({ required: true }) item!: NavigationItem;
  isOpen = false;
  navItemType = NavItemType;

  toggle() { 
    this.isOpen = !this.isOpen
  }
}