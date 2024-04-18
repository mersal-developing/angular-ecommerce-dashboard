import { MatIconModule } from '@angular/material/icon';
import { ChangeDetectionStrategy, Component, ElementRef, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationItemComponent } from '../navigation-item/navigation-item.component';
import { NavigationTabsComponent } from "../navigation-tabs/navigation-tabs.component";
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from 'src/app/services';
import { RoutingService } from 'src/app/core/services';
import { NavItemType, NavigationItem } from 'src/app/models';

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
  el = inject(ElementRef);
  routingService = inject(RoutingService);

  isOpen = false;
  navItemType = NavItemType;
  translationService = inject(TranslationService)

  get isActiveCollapse(): boolean {
   return this.routingService.currentLocation.includes(this.item.title.toLowerCase());
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
