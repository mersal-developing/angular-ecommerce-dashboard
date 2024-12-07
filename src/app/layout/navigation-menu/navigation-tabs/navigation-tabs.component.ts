import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, forwardRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { NavigationItemComponent } from "../navigation-item/navigation-item.component";
import { NavigationCollapsableComponent } from "../navigation-collapsable/navigation-collapsable.component";
import { TranslateModule } from '@ngx-translate/core';
import { NavItemType, NavigationItem } from 'src/app/models';
import { RoutingService } from 'src/app/core/services';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { skip } from 'rxjs';

@Component({
    selector: 'app-navigation-tabs',
    templateUrl: './navigation-tabs.component.html',
    styleUrls: ['./navigation-tabs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        MatTabsModule,
        MatIconModule,
        NavigationItemComponent,
        TranslateModule,
        forwardRef(() => NavigationCollapsableComponent)
    ]
})

export class NavigationTabsComponent {
  @Input({ required: true }) item!: NavigationItem;
  routingService = inject(RoutingService);

  openNextTab = false;
  navItemType = NavItemType;
  currentSelectedRootTab = 0;

  isActiveTab!: boolean
  cdr = inject(ChangeDetectorRef);


  openTap() {
    this.openNextTab = true;
    this.currentSelectedRootTab++;
  }

  closeTab() {
    this.currentSelectedRootTab--;
    this.openNextTab = false;
  }

  constructor() {
    this.routingService?.currentLocation
    .pipe(
      skip(1),
      takeUntilDestroyed()
    )
    .subscribe(route => {
      this.isActiveTab = route.includes(this.item.title.toLowerCase());
      this.cdr.markForCheck()
    })
  }
}
