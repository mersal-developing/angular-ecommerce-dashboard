import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RoutingService } from 'src/app/core/services';

@Component({
    selector: 'app-breadcrumbs',
    imports: [CommonModule, MatIconModule],
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent {
  @Input() showBackButton!: boolean;
  routingService = inject(RoutingService);
  canNavigateBack = false;

  ngOnInit() {
    if(this.routingService.history.length > 1) this.canNavigateBack = true; 
  }

  navigateBack() {
    this.routingService.navigateBackClicked();
  }



}
