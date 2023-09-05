import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkTargetType, NavigationItem } from '../../models';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation-item',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule],
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationItemComponent {
  @Input({ required: true }) item!: NavigationItem;
  targetType = LinkTargetType;


}
