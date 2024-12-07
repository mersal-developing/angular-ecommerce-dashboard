import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule, ProgressBarMode } from '@angular/material/progress-bar';
import { LoadingBarService } from 'src/app/services';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-loading-bar',
    imports: [CommonModule, MatProgressBarModule],
    templateUrl: './loading-bar.component.html',
    styleUrls: ['./loading-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingBarComponent {
  loadingBarService = inject(LoadingBarService);
  mode$!: Observable<ProgressBarMode>;
  defaultMode: ProgressBarMode = 'indeterminate';

  progress: number = 0;
  show$: Observable<boolean>;

  constructor() {
    this.show$ = this.loadingBarService.show$;
    this.mode$ = this.loadingBarService.mode$;
  }
}
