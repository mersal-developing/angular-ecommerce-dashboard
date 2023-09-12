import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-user-profile-dropdown',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatMenuModule, MatDividerModule],
  templateUrl: './user-profile-dropdown.component.html',
  styleUrls: ['./user-profile-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileDropdownComponent {

}
