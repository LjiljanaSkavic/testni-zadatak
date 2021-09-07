import { ICity } from "./ICity";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class DataService{
    // private cities: ICity[] = [];
    configUrl = 'https://localhost:8043/api/cities';
    constructor(private httpClient: HttpClient) {
    }

    getCities(){
      return this.httpClient.get<ICity[]>(this.configUrl);
    }
}
