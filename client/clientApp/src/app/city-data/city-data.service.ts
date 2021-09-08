import {ICity} from "./ICity";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {NgForm} from "@angular/forms";

@Injectable()
export class DataService {
  // private cities: ICity[] = [];
  configUrl = 'https://localhost:8043/api/cities';

  constructor(private httpClient: HttpClient) {
  }

  getCities() {
    return this.httpClient.get<ICity[]>(this.configUrl);
  }

  setCity(city: ICity): Observable<ICity> {
    return this.httpClient.post<ICity>(this.configUrl, city);
  }
}
