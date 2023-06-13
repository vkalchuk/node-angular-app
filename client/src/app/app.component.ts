import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedFile: string | null = null;
  selectedTable: any | null = null;

  onSelectedFileChange(file: string) {
    this.selectedFile = file;
    this.selectedTable = null;
  }

  onSelectedTableChange(table: string) {
    this.selectedTable = table;
  }
}
