import { IMain } from "../../../city/IMain";
import { IWeatherDescription } from "../../../city/IWeatherDescription";
import { IAuditInfo, ISoftDelete } from "../../../core/models/db/audit-info";
import { IIdentifier } from "../../../core/models/db/identifier";

export interface ICity extends IIdentifier, ISoftDelete, IAuditInfo {
    id: number;
    name: string;
    coord: {
        lat: number;
        lon: number;
    }
    main: IMain;
    dt: number;
    wind: {
        speed: number;
        deg: number;
    }
    sys: {
        country: string
    };
    rain: null;
    snow: null;
    clouds: {
        all: number
    };
    weather: IWeatherDescription[];

}
