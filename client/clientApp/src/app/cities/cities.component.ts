import {Component, OnInit, ViewChild} from '@angular/core';
import {TableComponent} from "./table/table.component";

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  @ViewChild(TableComponent) table;

  constructor() { }

  ngOnInit(): void {
  }

  showTableData(){
    this.table.getData();
  }

}
