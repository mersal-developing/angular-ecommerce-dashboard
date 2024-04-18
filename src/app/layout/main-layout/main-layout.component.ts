import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { RouterOutlet } from '@angular/router';
import { NavigationMenuComponent } from '../navigation-menu/navigation-menu.component';
import { LoadingBarComponent } from "../../components/loading-bar/loading-bar.component";

@Component({
    selector: 'app-main-layout',
    standalone: true,
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        NavigationMenuComponent,
        HeaderComponent,
        RouterOutlet,
        LoadingBarComponent
    ]
})
export class MainLayoutComponent {

}
