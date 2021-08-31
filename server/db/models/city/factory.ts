import { Connection } from 'mongoose';

import { Factory } from '../../../core/db/factory';
import { ICity } from './city';
import { CitySchema } from './schema';

export class CityFactory extends Factory<ICity> {
  constructor(connection: Connection) {
    super({
      connection: connection,
      name: 'ICity',
      definition: CitySchema,
      indexes: [
        {
          fields: {
            'isDeleted': 1
          }
        }
      ]
    });
  }
}
