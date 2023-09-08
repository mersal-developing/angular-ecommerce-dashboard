import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationItemComponent } from '../navigation-item/navigation-item.component';
import { NavigationCollapsableComponent } from "../navigation-collapsable/navigation-collapsable.component";
import { NavigationTabsComponent } from "../navigation-tabs/navigation-tabs.component";
import { MatIconModule } from '@angular/material/icon';
import { NavigationItem, NavItemType } from 'src/app/shared/models/navigation.types';

@Component({
  selector: 'app-navigation-group',
  standalone: true,
  templateUrl: './navigation-group.component.html',
  styleUrls: ['./navigation-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    NavigationItemComponent,
    NavigationCollapsableComponent,
    NavigationTabsComponent,
    MatIconModule
  ]
})
export class NavigationGroupComponent {
  @Input({ required: true }) item!: NavigationItem;
  navItemType = NavItemType;
}
