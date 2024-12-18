import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from "../../shared/components/breadcrumbs/breadcrumbs.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        BreadcrumbsComponent,
        TranslateModule
    ]
})
export class DashboardComponent {

}
