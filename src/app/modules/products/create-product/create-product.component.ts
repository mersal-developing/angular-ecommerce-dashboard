import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { BreadcrumbsComponent } from 'src/app/shared/components/breadcrumbs/breadcrumbs.component';
import { FormFieldsComponent } from 'src/app/shared/components/form-fields/form-fields.component';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
    selector: 'app-create-product',
    standalone: true,
    templateUrl: './create-product.component.html',
    styleUrl: './create-product.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        BreadcrumbsComponent,
        MatIconModule,
        TranslateModule,
        FormFieldsComponent,
        MatTabsModule
    ]
})
export class CreateProductComponent {
    required = false;

    sections = [
        { name: 'general', icon: '' },
        { name: 'inventory', icon: '' },
        { name: 'setup', icon: '' },
        { name: 'images', icon: '' },
        { name: 'seo', icon: '' },
        { name: 'Shipping & Tax', icon: '' },
        { name: 'status', icon: '' }
    ]

}
