import {NextFunction} from 'express';

import {Router} from '../../core/express/router';
import {Server} from '../../core/server';
import {IResponse} from '../../core/models/express/response';
import {CityRepository} from '../../repositories/city';
import {IRequest} from '../../core/models/express/request';
import {WeatherData} from '../../weather/weatherData';

// const request = require('request-promise-native');
export class CityRouter extends Router {

  constructor(server: Server) {
    super(server);
  }

  initRoutes() {
    this.router.route('/')
      .get(this.queryAll.bind(this))
      .post(this.createCity.bind(this));

    this.router.route('/search')
      .get(this.getCity.bind(this));
    // .post(this.createCity.bind(this));
  }

  //za rad sa bazom, da mi pokupi sve iz baze
  async queryAll(request: IRequest, response: IResponse, next: NextFunction) {
    try {
      const cr = new CityRepository(this.server);
      response.data = await cr.query(); // u response.data se sada nalaze gradovi iz baze
      next();
    } catch (error) {
      next(Router.handleError(error, request, response));
    }
  }

  //da doda grad u bazu
  async createCity(request: IRequest, response: IResponse, next: NextFunction) {
    try {
      const cr = new CityRepository(this.server);
      const city = request.body;
      //
      const exist = await cr.findOne({'id': city.id});
      if (exist) {
        response.data = 'City exists';
      }else{
        const created = await cr.create(newCity => {
          newCity.id = city.id;
          newCity.name = city.name;//stavljanje u bazu
          newCity.coord.lat = city.coord.lat;
          newCity.coord.lon = city.coord.lon;
          newCity.main = city.main;
          newCity.dt = city.dt;
          newCity.wind.speed = city.wind.speed;
          newCity.wind.deg = city.wind.deg;
          newCity.sys.country = city.sys.country;
          newCity.rain = city.rain;
          newCity.snow = city.snow;
          newCity.clouds.all = city.clouds.all;
          newCity.weather = city.weather;
        });
        response.data = await cr.getOne({'_id': created._id});
      }
      next();
    } catch (error) {
      next(Router.handleError(error, request, response));
    }
  }

  async getCity(request: IRequest, response: IResponse, next: NextFunction) {
    try {
      const wData = new WeatherData();
      const cityName = request.query.newCity;
      const newCity = await wData.getCityDataByName(<string>cityName);
      response.data = [newCity];
      next(); //zaboravila sam sta ovo znaci
    } catch (e) {
      throw e;
    }
  }


}
