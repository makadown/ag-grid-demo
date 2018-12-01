import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from 'src/app/services/product.service';
// import 'ag-grid-enterprise';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private gridApi;
  private gridColumnApi;
  public rowData: any[];
  private subscription: Subscription;

  public columnDefs = [
    {
      headerName: '_id',
      field: '_id',
      hide: true,
      width: 1
    },
    {
      headerName: 'Name',
      field: 'name',
      width: 250,
      filterParams: { newRowsAction: 'keep' }
    },
    {
      headerName: 'Category',
      field: 'cetegory_id.cetegory',
      width: 90,
      filterParams: { newRowsAction: 'keep' }
    },
    {
      headerName: 'Price',
      field: 'price',
      width: 90,
      filterParams: { newRowsAction: 'keep' }
    }
  ];
 // public autoGroupColumnDef;
  public rowSelection;
  public rowGroupPanelShow;
  public pivotPanelShow;
  public defaultColDef;

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
  }
  ngOnDestroy(): void {

  }

  constructor(private http: HttpClient,
              private _productService: ProductService) {
    this.rowSelection = 'single';
  }

  onSelectionChanged() {
    const selectedRows = this.gridApi.getSelectedRows();
    console.log(selectedRows);
    const selectedRowsString = JSON.stringify(selectedRows[0]);
    document.querySelector('#selectedRows').innerHTML = selectedRowsString;
  }

  onPageSizeChanged(newPageSize) {
    const value = (<HTMLSelectElement>document.getElementById('page-size')).value;
    this.gridApi.paginationSetPageSize(Number(value));
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.subscription = this._productService.getProducts().subscribe(data => {
            this.rowData = data;
        } );
    /*
    this.http
      .get(
        'https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json'
      )
      .subscribe(data => {
        this.rowData = data;
      });*/
  }

}
