import {NextFunction} from 'express';

import {Router} from '../../core/express/router';
import {Server} from '../../core/server';
import {IRequest} from '../../core/models/express/request';
import {IResponse} from '../../core/models/express/response';
import {CityRepository} from '../../repositories/city';

export class CityRouter extends Router {

  constructor(server: Server) {
    super(server);
  }

  initRoutes() {
    this.router.route('/')
      .get(this.queryAll.bind(this))
      .post(this.createCity.bind(this));
  }

  async queryAll(request: IRequest, response: IResponse, next: NextFunction) {
    try {
      const cr = new CityRepository(this.server);
      response.data = await cr.query();
      next();
    } catch (error) {
      next(Router.handleError(error, request, response));
    }
  }

  async createCity(request: IRequest, response: IResponse, next: NextFunction) {
    try {
      const cr = new CityRepository(this.server);
      const city = request.body;
      const created = await cr.create(newCity => {
        newCity.name = city.name;
      })
      response.data = await cr.getOne( { '_id': created._id });
      next();
    } catch (error) {
      next(Router.handleError(error, request, response));
    }
  }


}
