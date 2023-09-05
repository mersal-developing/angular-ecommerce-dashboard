import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationItem } from '../../models';

@Component({
  selector: 'app-navigation-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation-tabs.component.html',
  styleUrls: ['./navigation-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationTabsComponent {
  @Input({ required: true }) item!: NavigationItem;

}
