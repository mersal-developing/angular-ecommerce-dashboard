import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { BreadcrumbsComponent } from 'src/app/shared/components/breadcrumbs/breadcrumbs.component';
import { DashboardRoutes, Product } from 'src/app/models';
import { Observable } from 'rxjs';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
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
  displayedColumns = ['no', 'image','name', 'category', 'quantity', 'price', 'active', 'actions'];
  actions = ['view', 'edit', 'delete']

  ngOnInit() {
  }

  createProduct(){
    this.router.navigateByUrl(`${DashboardRoutes.Products}/${DashboardRoutes.Create}`)
  }

}
