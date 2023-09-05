import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationMenuComponent } from "./core/navigation/navigation-menu/navigation-menu.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, NavigationMenuComponent],
})
export class AppComponent {
  title = 'shop-dashboard';
}
