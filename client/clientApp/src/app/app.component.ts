import {Component, ViewChild} from '@angular/core';
import {DataService} from "./city-data/city-data.service";
import {ICity} from "./city-data/ICity";
import {CitiesComponent} from "./cities/cities.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(CitiesComponent) cityCompontent;
  title = 'clientApp';
  city: ICity;

  constructor(private dataService: DataService) {
    this.city = null;
  }

  onCityQuery = (name: string) => this.dataService.setNewCity(name);

  onAddCity() {
    this.dataService.setCity(this.city).subscribe(response => {
      console.log(response);
      this.onShowCities();
    });
    // this.onShowCities();
  }

  onShowCities() {
    this.cityCompontent.showTableData();
  }

  getUrl() {
    return "url('https://ak.picdn.net/shutterstock/videos/2683982/thumb/1.jpg')";
  }
}

