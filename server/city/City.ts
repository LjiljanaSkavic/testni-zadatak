import { IWeatherDescription } from './IWeatherDescription';
import { IMain } from './IMain';
export interface ICity {
    id?: number;
    name: string;
    coord?: {
        lat: number;
        lon: number;
    }
    main?: IMain;
    dt?: number;
    wind?: {
        speed: number;
        deg: number;
    }
    sys?: {
        country: string
    };
    rain?: null;
    snow?: null;
    clouds?: {
        all: number
    };
    weather?: IWeatherDescription[];
}
