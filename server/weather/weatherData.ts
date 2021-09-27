import {ICity} from '../city/City';

const request = require('request-promise-native');

export class WeatherData {
  key = '5c4f98348dd5a7d5c050c845d230d1ef';
  cities: ICity[];

  async getInitialData(numOf: number): Promise<ICity[]> {
    try {
      const options = {
        method: 'GET',
        uri: `https://api.openweathermap.org/data/2.5/find?lat=44.7&lon=17.3&cnt=${numOf}&appid=${this.key}`,
        json: true
      };
      const response = await request(options);
      this.cities = response.list;
      return this.cities;
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async getCityDataByName(name: string) {
    try {
      const options = {
        method: 'GET',
        uri: `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${this.key}`,
        json: true
      };
      const response = await request(options);
      return response;
    } catch (e) {
      console.log(e);
    }
  }

  async getCityDataByID(id: string) {
    try {
      const options = {
        method: 'GET',
        uri: `api.openweathermap.org/data/2.5/weather?id=${id}&appid=${this.key}`,
        json: true
      };
      const response = await request(options);
      return response;
    } catch (e) {
      console.log(e);
    }

  }

}
