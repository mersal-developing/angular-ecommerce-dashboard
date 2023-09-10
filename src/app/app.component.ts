import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainLayoutComponent } from "./shared/layout/main-layout/main-layout.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, MainLayoutComponent]
})
export class AppComponent {
  title = 'shop-dashboard';
}
