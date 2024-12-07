import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { BreadcrumbsComponent } from 'src/app/shared/components/breadcrumbs/breadcrumbs.component';
import { DashboardRoutes, Product } from 'src/app/models';
import { Observable } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { TableComponent } from 'src/app/shared/components/table/table.component';

@Component({
    selector: 'app-products',
    imports: [
        CommonModule,
        BreadcrumbsComponent,
        TranslateModule,
        TableComponent,
        MatIconModule,
        MatButtonModule
    ],
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
  router = inject(Router);
  products!: Observable<Product[]>;
  displayedColumns = ['no', 'image', 'name', 'category', 'quantity', 'price', 'active', 'actions'];
  actions = ['view', 'edit', 'delete']

  createProduct() {
    this.router.navigateByUrl(`${DashboardRoutes.Products}/${DashboardRoutes.Create}`)
  }

}
