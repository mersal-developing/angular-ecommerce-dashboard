import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationMenuComponent } from "../navigation/navigation-menu.component";
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-main-layout',
    standalone: true,
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, NavigationMenuComponent, HeaderComponent]
})
export class MainLayoutComponent {

}
