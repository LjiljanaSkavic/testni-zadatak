import { ICity } from './../city/City';
const request = require('request-promise-native');

export class WeatherData {

  cities: ICity[];
  async getData(numOf: number) {
    const key = '5c4f98348dd5a7d5c050c845d230d1ef';
    const options = {
      method: 'GET',
      uri: `https://api.openweathermap.org/data/2.5/find?lat=44.7&lon=17.3&cnt=${numOf}&appid=${key}`,
      json: true
    }
    const response = await request(options);
    this.cities = response.list;
    return this.cities;
  }

}