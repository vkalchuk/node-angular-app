import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css'],
})
export class FileListComponent implements OnInit {
  files: string[] = [];

  @Output() private selectedFileChange: EventEmitter<string> =
    new EventEmitter();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getFiles();
  }

  getFiles(): void {
    this.http.get<any>('http://localhost:3000/files').subscribe(
      (data) => {
        this.files = data.files;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  selectFile(file: string): void {
    this.selectedFileChange.emit(file);
  }
}
