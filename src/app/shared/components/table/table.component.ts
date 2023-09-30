import { ChangeDetectionStrategy, Component, Input, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { DOCUMENT } from '@angular/common';
import { ActionButtonsComponent } from "../action-buttons/action-buttons.component";
import { Action } from '../../models';

@Component({
  selector: 'app-table',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    TranslateModule,
    MatIconModule,
    ActionButtonsComponent
  ]
})
export class TableComponent {
  @Input({ required: true }) tableData!: any;
  @Input({ required: true }) tableCols!: string[];
  @Input() pageSize: number = 10;
  @Input() hidePageSize: boolean = false;
  @Input() actions!: Action[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  tableDataSource!: MatTableDataSource<any>;

  document = inject(DOCUMENT);

  ngOnInit() {
    this.tableDataSource = new MatTableDataSource(this.tableData);
  }

  ngAfterViewInit() {
    this.tableDataSource.paginator = this.paginator;
    if (this.document.dir === "rtl") this.getArabicPaginatorIntl();
  }

  processAction(event: string) {
    console.log(event)
  }

  /**
   *   This function is a crucial part of our application's internationalization efforts.
   *     It is responsible for setting the translation for the Material-UI pagination component.
  */

  getArabicPaginatorIntl() {
    const paginatorIntl = this.paginator._intl;

    paginatorIntl.itemsPerPageLabel = 'عدد العناصر فى الصفحة';
    paginatorIntl.nextPageLabel = 'الصفحة التالية';
    paginatorIntl.previousPageLabel = 'الصفحة السابقة';
    paginatorIntl.firstPageLabel = 'الصفحة الأولى';
    paginatorIntl.lastPageLabel = 'الصفحة الأخيرة';
    paginatorIntl.getRangeLabel = this.arabicRangeLabel;

    return paginatorIntl;
  }

  arabicRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length == 0 || pageSize == 0) {
      return `0 من ${length}`;
    }

    length = Math.max(length, 0);

    const startIndex = page * pageSize;

    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex =
      startIndex < length
        ? Math.min(startIndex + pageSize, length)
        : startIndex + pageSize;

    return `${startIndex + 1} - ${endIndex} من ${length}`;
  };

}
