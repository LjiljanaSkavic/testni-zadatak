import {ICity} from "../city-data/ICity";
import {Injectable} from "@angular/core";

@Injectable()
export class CityDetailsService{
  isSelected = false;
  selectedCity: ICity | null;

  constructor() {
    this.selectedCity = null;
  }

  addCity(city: ICity){
    this.selectedCity = city;
  }

  getCity(){
    return this.selectedCity;
  }
}
