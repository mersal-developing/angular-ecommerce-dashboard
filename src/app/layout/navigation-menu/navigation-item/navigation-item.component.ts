import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LinkTargetType, NavigationItem } from 'src/app/models';

@Component({
    selector: 'app-navigation-item',
    imports: [CommonModule, MatIconModule, RouterModule, TranslateModule],
    templateUrl: './navigation-item.component.html',
    styleUrls: ['./navigation-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationItemComponent {
  @Input({ required: true }) item!: NavigationItem;
  targetType = LinkTargetType;


}
