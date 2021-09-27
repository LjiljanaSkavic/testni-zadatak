import {Component, OnInit, Output} from '@angular/core';
import { DataService } from 'src/app/city-data/city-data.service';
import {ICity} from "../../city-data/ICity";
import { CityDetailsService } from '../city-details/city-details.service';

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
      .subscribe(cities => {
        this.cities = cities;
        for(let i=0; i<this.cities.length; i++){
          cities[i].main.temp = Math.round(cities[i].main.temp- 273.15);
          cities[i].main.feels_like = Math.round(cities[i].main.feels_like - 273.15);
          cities[i].main.temp_max = Math.round(cities[i].main.temp_max - 273.15);
          cities[i].main.temp_min = Math.round(cities[i].main.temp_min - 273.15);
          this.cities = cities;
        }
      });
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
