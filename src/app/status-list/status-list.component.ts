import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.css']
})
export class StatusListComponent implements OnInit {
  private title = 'status'

  private gridApi;
  private gridColumnApi;
  private columnDefs = [
        {headerName: 'Status', field: 'status', sortable: true, filter: true },
        {headerName: 'Piste', field: 'piste', sortable: true, filter: true },        
        {headerName: 'Priorité', field: 'priority', sortable: true, filter: true },
        {headerName: 'Nom', field: 'name', sortable: true, filter: true },
        {headerName: 'Prénom', field: 'firstname', sortable: true, filter: true },
        {headerName: 'Métiers', field: 'skills', sortable: true, filter: true },
        {headerName: 'Exp.', field: 'xp', sortable: true, filter: true },
        {headerName: 'Disponible le', field: 'availability', sortable: true, filter: true },
        {headerName: 'Action', field: 'action'}
    ];
  
  private rowData: any;

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
      this.rowData = this.getStatus();
  }

  getStatus(){
    return this.http.get('/assets/status.json');
  }

  autoSizeAll() {
    var allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach(function(column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.autoSizeAll();
  }
}