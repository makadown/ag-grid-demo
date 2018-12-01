import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'ag-grid-enterprise';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  private gridApi;
  private gridColumnApi;
  public rowData: any[];

  public columnDefs;
  public autoGroupColumnDef;
  public rowSelection;
  public rowGroupPanelShow;
  public pivotPanelShow;
  public defaultColDef;

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
  }

  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        headerName: 'Athlete',
        field: 'athlete',
        width: 150,
        filterParams: { newRowsAction: 'keep' },
        checkboxSelection: function(params) {
          return params.columnApi.getRowGroupColumns().length === 0;
        },
        headerCheckboxSelection: function(params) {
          return params.columnApi.getRowGroupColumns().length === 0;
        }
      },
      {
        headerName: 'Age',
        field: 'age',
        width: 90,
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: 'Country',
        field: 'country',
        width: 120,
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: 'Year',
        field: 'year',
        width: 90,
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: 'Date',
        field: 'date',
        width: 110,
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: 'Sport',
        field: 'sport',
        width: 110,
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: 'Gold',
        field: 'gold',
        width: 100,
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: 'Silver',
        field: 'silver',
        width: 100,
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: 'Bronze',
        field: 'bronze',
        width: 100,
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: 'Total',
        field: 'total',
        width: 100,
        filterParams: { newRowsAction: 'keep' }
      }
    ];
    this.autoGroupColumnDef = {
      headerName: 'Group',
      width: 200,
      field: 'athlete',
      valueGetter: function(params) {
        if (params.node.group) {
          return params.node.key;
        } else {
          return params.data[params.colDef.field];
        }
      },
      headerCheckboxSelection: true,
      cellRenderer: 'agGroupCellRenderer',
      cellRendererParams: { checkbox: true }
    };
    this.rowSelection = 'multiple';
    this.rowGroupPanelShow = 'always';
    this.pivotPanelShow = 'always';
    this.defaultColDef = {
      editable: true,
      enableValue: true
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get(
        'https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json'
      )
      .subscribe(data => {
        this.rowData = data;
      });
  }

}
