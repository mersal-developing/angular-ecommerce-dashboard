import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { BreadcrumbsComponent } from 'src/app/shared/components/breadcrumbs/breadcrumbs.component';

@Component({
    selector: 'app-customers',
    imports: [
        CommonModule,
        BreadcrumbsComponent,
        TranslateModule
    ],
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomersComponent {

}
