import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationItemComponent } from '../navigation-item/navigation-item.component';
import { NavItemType, NavigationItem } from '../../models';
import { NavigationCollapsableComponent } from "../navigation-collapsable/navigation-collapsable.component";
import { NavigationTabsComponent } from "../navigation-tabs/navigation-tabs.component";

@Component({
    selector: 'app-navigation-group',
    standalone: true,
    templateUrl: './navigation-group.component.html',
    styleUrls: ['./navigation-group.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, NavigationItemComponent, NavigationCollapsableComponent, NavigationTabsComponent]
})
export class NavigationGroupComponent {
  @Input({ required: true }) item!: NavigationItem;
  navItemType = NavItemType;
}
