import { Server } from '../core/server';
import { Repository } from '../core/repository';
import { ICity } from '../db/models/city/city';

export class CityRepository extends Repository<ICity> {

  constructor(server: Server) {
    super({
      factory: server.factories.city,
      userId: server.systemUserId,
      aggregationQuery: {
        $match: {
          'isDeleted': false
        },
        $project: {
          'id': 1,
          'name': 1,
          'coord.lat': 1,
          'coord.lon': 1,
          'main': 1,
          'dt': 1,
          'wind.speed': 1,
          'wind.deg': 1,
          'sys.country': 1,
          'rain': 1,
          'snow': 1,
          'clouds.all': 1,
          'weather': 1
          }
        },
      auditLogger: server.auditLogger
    });
  }
}
