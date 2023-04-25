import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MySapiDataSource} from '../datasources';
import {MySqlMd, MySqlMdRelations} from '../models';

export class FirstapiMysqlRepository extends DefaultCrudRepository<
  MySqlMd,
  typeof MySqlMd.prototype.id,
  MySqlMdRelations
> {
  constructor(
    @inject('datasources.MySapi') dataSource: MySapiDataSource,
  ) {
    super(MySqlMd, dataSource);
  }
}
