import { ChangeDetectionStrategy, Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { NavigationItemComponent } from "../navigation-item/navigation-item.component";
import { NavigationCollapsableComponent } from "../navigation-collapsable/navigation-collapsable.component";
import { NavItemType, NavigationItem } from 'src/app/shared/models';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation-tabs',
  standalone: true,
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
  openNextTab = false;
  navItemType = NavItemType;
  currentSelectedRootTab = 0;

  openTap() {
    this.openNextTab = true;
    this.currentSelectedRootTab++;
  }

  closeTab() {
    this.currentSelectedRootTab--;
    this.openNextTab = false;
  }

}
