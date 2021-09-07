import {Component, OnInit} from '@angular/core';
import {CityDetailsService} from "./city-details.service";
import {ICity} from "../city-data/ICity";

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss']
})
export class CityDetailsComponent implements OnInit {
  isSelected = false;
  selectedCity: ICity | null;

  constructor(private cityDetailsService: CityDetailsService) {
    this.selectedCity = null;
  }

  ngOnInit(): void {
  }

  check(){
    this.isSelected = this.cityDetailsService.isSelected;
    this.selectedCity = this.cityDetailsService.getCity();
    return this.cityDetailsService.isSelected;
  }
}
