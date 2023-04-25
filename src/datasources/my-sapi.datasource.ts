import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'MySapi',
  connector: 'mysql2',
  url: '',
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '12345@A#',
  database: 'myDBS',
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MySapiDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'MySapi';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.MySapi', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
