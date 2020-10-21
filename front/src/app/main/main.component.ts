import { Component, OnInit, ViewChild, HostListener, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import { MdbTablePaginationComponent, MdbTableDirective } from '@angular/material/table';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {

  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective
  elements: any = [];
  previous: any = [];
  headElements = ['ID', 'Name', 'eMail', 'Role ID', 'Rol Name', 'Rol Code'];

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    //Aqui voy hacer mi petición a back !!!!
    for (let i = 1; i <= 15; i++) {
      this.elements.push({id: i.toString(), name: 'name' + i, email: 'email ' + i, rolId: 'rolId ' + i, rolName: 'Rol Name ' + i, rolCode: 'rolCode ' + i});
    }

    this.mdbTable.setDataSource(this.elements);
    this.elements = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(10);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

}
