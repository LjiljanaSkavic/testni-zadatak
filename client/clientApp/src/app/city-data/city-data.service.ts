import {ICity} from "./ICity";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class DataService {
  // private cities: ICity[] = [];
  citiesUrl = 'https://localhost:8043/api/cities';
  newCityUrl= 'https://localhost:8043/api/cities/search?newCity=';

  constructor(private httpClient: HttpClient) {
  }

  getCities(): Observable<ICity[]>{
    return this.httpClient.get<ICity[]>(this.citiesUrl);
  }

  setCity(city: ICity): Observable<ICity> {
    return this.httpClient.post<ICity>(this.citiesUrl, city);
  }

  setNewCity(cityName: string): Observable<ICity> {
    console.log(cityName);
    return this.httpClient.get<ICity>(this.newCityUrl + cityName);
  }

}
