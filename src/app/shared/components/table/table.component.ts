import { ChangeDetectionStrategy, Component, Input, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, TranslateModule, MatIconModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
  @Input({ required: true }) tableData!: any;
  @Input({ required: true }) tableCols!: string[];

  tableDataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  document = inject(DOCUMENT);
  
  ngOnInit() {
    this.tableDataSource = new MatTableDataSource(this.tableData);
  }

  ngAfterViewInit() {
    this.tableDataSource.paginator = this.paginator;
    if(this.document.dir === "rtl") this.getArabicPaginatorIntl();
  }

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
