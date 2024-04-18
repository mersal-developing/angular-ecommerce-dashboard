import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { BreadcrumbsComponent } from 'src/app/components/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    CommonModule, 
    BreadcrumbsComponent,
    TranslateModule
  ],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersComponent {

}
