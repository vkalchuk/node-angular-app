import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
})
export class TableListComponent {
  tables: any[] = [];

  @Input() selectedFile: string | null = null;

  @Output() private selectedTableChange: EventEmitter<string> =
    new EventEmitter();

  constructor(private http: HttpClient) {}

  ngOnChanges(change: SimpleChanges) {
    if (change['selectedFile'].currentValue) {
      this.getTables();
    }
  }

  getTables(): void {
    if (this.selectedFile) {
      this.http
        .get<any>(`http://localhost:3000/tables/${this.selectedFile}`)
        .subscribe(
          (data) => {
            this.tables = data.tables;
          },
          (error) => {
            console.error(error);
          }
        );
    }
  }

  selectTable(table: any): void {
    this.selectedTableChange.emit(table);
  }
}
