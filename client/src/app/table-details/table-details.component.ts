import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.css'],
})
export class TableDetailsComponent {
  @Input() selectedTable: any | null = null;
}
