import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { BreadcrumbsComponent } from 'src/app/shared/components/breadcrumbs/breadcrumbs.component';
import { ApiService } from 'src/app/shared/services';
import { API_URLS, Product } from 'src/app/models';
import { Observable } from 'rxjs';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Action } from 'src/app/shared/models';

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
  apiServices = inject(ApiService);
  products!: Observable<Product[]>;
  isLoading!: boolean;
  displayedColumns = ['no', 'image', 'name', 'category', 'quantity', 'price'];
  actions: Action[] = [{
    name: 'view',
    icon: 'pageview'
  },
  {
    name: 'edit',
    icon: 'edit'
  },
  {
    name: 'remove',
    icon: 'close'
  }]

  ngOnInit() {
    this.isLoading = true;
    this.products = this.apiServices.request<Product[]>('GET', API_URLS.Products, {
      _page: 1,
      _limit: 10
    })
  }

}
