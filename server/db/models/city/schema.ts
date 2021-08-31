import { SchemaDefinition } from 'mongoose';
import { BaseSchemaDefinition } from '../../../core/db/base';

export const CitySchema: SchemaDefinition = {

  id: {
    type: Number
  },
  name: {
    type: String,
  },
  coord: {
      lat: Number,
      lon: Number
  },
  main: {
    temp: Number,
    feels_like: Number,
    temp_min: Number,
    temp_max: Number,
    pressure: Number,
    humidity: Number,
    sea_level: Number,
    grnd_level: Number
  },
  dt: {
    type: Number
  },
  wind: {
      speed: Number,
      deg: Number
  },
  sys: {
      country: String
  },
  // rain: {
  //   type: null
  // },
  // snow: {
  //   type: null
  // },
  clouds: {
      all: Number
  },
  weather: {
    id: Number,
    main: String,
    description: String,
    icon: String
  },
  ...BaseSchemaDefinition
};
