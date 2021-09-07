import {Component, OnInit, Output} from '@angular/core';
import {DataService} from "../city-data/city-data.service";
import {ICity} from "../city-data/ICity";
import {CityDetailsService} from "../city-details/city-details.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Output() cities: ICity[] = [];

  constructor(private dataService: DataService, private cityDetailsService: CityDetailsService) {
  }

  getData(){
    this.dataService.getCities()
      .subscribe(cities =>
      this.cities = cities);
  }

  ngOnInit(): void {
    this.getData();
  }

  onTableCityClick(city: ICity) {
    console.log(city);
    this.cityDetailsService.isSelected = true;
    this.cityDetailsService.addCity(city);
  }
}
