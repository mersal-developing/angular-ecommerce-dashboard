import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
  @Input({ required: true }) tableData!: any;
  @Input({required: true}) tableCols!: string[];
  
  tableDataSource!: MatTableDataSource<any>;

  ngOnInit() {
    this.tableDataSource = new MatTableDataSource(this.tableData);
    console.log(this.tableData, this.tableDataSource)
  } 
}
