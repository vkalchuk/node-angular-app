import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FileListComponent } from './file-list/file-list.component';
import { TableListComponent } from './table-list/table-list.component';
import { TableDetailsComponent } from './table-details/table-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FileListComponent,
    TableListComponent,
    TableDetailsComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
