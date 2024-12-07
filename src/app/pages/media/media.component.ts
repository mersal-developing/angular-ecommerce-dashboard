import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from "../../shared/components/breadcrumbs/breadcrumbs.component";
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-media',
    imports: [
        CommonModule,
        BreadcrumbsComponent,
        TranslateModule,
        MatButtonModule,
        MatIconModule
    ],
    templateUrl: './media.component.html',
    styleUrls: ['./media.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaComponent {

}
