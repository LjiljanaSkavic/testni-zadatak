import { CityFactory } from './models/city/factory';
import { Connection } from 'mongoose';

import { RoleFactory } from './models/role/factory';
import { UserFactory } from './models/user/factory';
import { TokenFactory } from './models/token/factory';
import { AuditLogFactory } from './models/audit-log/factory';

export interface IFactories {
  city: CityFactory;
  auditLog: AuditLogFactory;
  role: RoleFactory;
  user: UserFactory;
  token: TokenFactory;
}

export class FactoryBuilder {
  static build(connection: Connection): IFactories {
    return {
      city: new CityFactory(connection),
      auditLog: new AuditLogFactory(connection),
      role: new RoleFactory(connection),
      user: new UserFactory(connection),
      token: new TokenFactory(connection)
    };
  }
}
