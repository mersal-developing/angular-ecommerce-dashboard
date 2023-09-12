import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MenuOpenStatus } from '../navigation/models';
import { NavigationMenuService } from '../navigation/navigation.service';
import { UtilitiesService } from '../../services/utilities.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  router = inject(Router);
  utilitiesService = inject(UtilitiesService);
  navigationMenuService = inject(NavigationMenuService);

  get navMenuStatus(): string | null {
    return this.navigationMenuService.getMenuStatus();
  }

  navigateHome() {
    this.router.navigate(['/']);
  }

  toggleMenu() {
    if (this.navMenuStatus !== null) {
      const menuStatu = this.utilitiesService.getNumber(this.navMenuStatus) === MenuOpenStatus.Opened ? MenuOpenStatus.Closed : MenuOpenStatus.Opened;
      this.navigationMenuService.setMenuStatus(menuStatu);
    } else {
      this.navigationMenuService.setMenuStatus(MenuOpenStatus.Opened);
    }
  }
}
