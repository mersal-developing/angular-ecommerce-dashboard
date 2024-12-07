import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { LanguageButtonComponent } from 'src/app/components/language-button/language-button.component';
import { UserProfileDropdownComponent } from 'src/app/components/user-profile-dropdown/user-profile-dropdown.component';
import { UtilitiesService } from 'src/app/services';
import { NavigationMenuService } from 'src/app/layout/service';
import { MenuOpenStatus } from 'src/app/models';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, MatIconModule, MatButtonModule, UserProfileDropdownComponent, LanguageButtonComponent]
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
