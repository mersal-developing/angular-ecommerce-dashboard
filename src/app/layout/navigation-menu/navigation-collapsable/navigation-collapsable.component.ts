import { MatIconModule } from '@angular/material/icon';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationItemComponent } from '../navigation-item/navigation-item.component';
import { NavigationTabsComponent } from "../navigation-tabs/navigation-tabs.component";
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from 'src/app/services';
import { RoutingService } from 'src/app/core/services';
import { NavItemType, NavigationItem } from 'src/app/models';
import { skip } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-navigation-collapsable',
    templateUrl: './navigation-collapsable.component.html',
    styleUrls: ['./navigation-collapsable.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, NavigationItemComponent, MatIconModule, NavigationTabsComponent, TranslateModule]
})
export class NavigationCollapsableComponent {

  @Input({ required: true }) item!: NavigationItem;
  el = inject(ElementRef);
  cdr = inject(ChangeDetectorRef);
  routingService = inject(RoutingService);

  isOpen = false;
  navItemType = NavItemType;
  translationService = inject(TranslationService)

  isActiveCollapse!: boolean;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor() {
    this.routingService?.currentLocation
      .pipe(
        skip(1),
        takeUntilDestroyed()
      )
      .subscribe(route => {
        this.isActiveCollapse = route.includes(this.item.title.toLowerCase());
        this.cdr.markForCheck()
      })
  }
}
