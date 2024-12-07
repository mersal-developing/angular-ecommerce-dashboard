import { CommonModule } from '@angular/common';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    QueryList,
    TemplateRef,
    ViewChild,
    ViewChildren,
    ViewContainerRef,
    viewChildren
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { BreadcrumbsComponent } from 'src/app/shared/components/breadcrumbs/breadcrumbs.component';
import { FormFieldsComponent } from 'src/app/shared/components/form-fields/form-fields.component';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
    selector: 'app-create-product',
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
export class CreateProductComponent implements AfterViewInit {
    @ViewChildren('sectionContainer', { read: ViewContainerRef }) sectionContainers!: QueryList<ViewContainerRef>;

    @ViewChild('generalTemplate', { read: TemplateRef, static: true }) generalTemplate!: TemplateRef<any>;
    @ViewChild('inventoryTemplate', { read: TemplateRef, static: true }) inventoryTemplate!: TemplateRef<any>;
    @ViewChild('setupTemplate', { read: TemplateRef, static: true }) setupTemplate!: TemplateRef<any>;
    @ViewChild('imagesTemplate', { read: TemplateRef, static: true }) imagesTemplate!: TemplateRef<any>;
    @ViewChild('seoTemplate', { read: TemplateRef, static: true }) seoTemplate!: TemplateRef<any>;
    @ViewChild('shippingTaxTemplate', { read: TemplateRef, static: true }) shippingTaxTemplate!: TemplateRef<any>;
    @ViewChild('statusTemplate', { read: TemplateRef, static: true }) statusTemplate!: TemplateRef<any>;


    required = false;

    sections = [
        { name: 'general', icon: 'settings' },
        { name: 'inventory', icon: 'article' },
        { name: 'setup', icon: 'handyman', },
        { name: 'images', icon: 'wallpaper' },
        { name: 'seo', icon: 'public' },
        { name: 'Shipping & Tax', icon: 'local_shipping' },
        { name: 'status', icon: 'check_circle' }
    ]

    templates: TemplateRef<any>[] = [];

    renderTemplate(template: TemplateRef<any>, container: ViewContainerRef) {
        container.clear();
        container.createEmbeddedView(template);
    }

    ngAfterViewInit() {
        this.templates = [
            this.generalTemplate,
            this.inventoryTemplate,
            this.setupTemplate,
            this.imagesTemplate,
            this.seoTemplate,
            this.shippingTaxTemplate,
            this.statusTemplate
        ];
    
        this.sectionContainers.forEach((container, index) => {
            this.renderTemplate(this.templates[index], container)
        })
    }


}

