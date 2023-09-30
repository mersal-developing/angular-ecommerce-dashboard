import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationItemComponent } from '../navigation-item/navigation-item.component';
import { NavigationCollapsableComponent } from "../navigation-collapsable/navigation-collapsable.component";
import { NavigationTabsComponent } from "../navigation-tabs/navigation-tabs.component";
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';    
import { NavigationItem, NavItemType } from '../../models';

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
    MatIconModule,
    TranslateModule
  ]
})
export class NavigationGroupComponent {
  @Input({ required: true }) item!: NavigationItem;
  navItemType = NavItemType;
}