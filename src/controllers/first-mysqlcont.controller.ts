import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {MySqlMd} from '../models';
import {FirstapiMysqlRepository} from '../repositories';

export class FirstMysqlcontController {
  constructor(
    @repository(FirstapiMysqlRepository)
    public firstapiMysqlRepository : FirstapiMysqlRepository,
  ) {}

  @post('/MySapi')
  @response(200, {
    description: 'MySqlMd model instance',
    content: {'application/json': {schema: getModelSchemaRef(MySqlMd)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MySqlMd, {
            title: 'NewMySqlMd',
            
          }),
        },
      },
    })
    mySqlMd: MySqlMd,
  ): Promise<MySqlMd> {
    return this.firstapiMysqlRepository.create(mySqlMd);
  }

  @get('/MySapi/count')
  @response(200, {
    description: 'MySqlMd model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(MySqlMd) where?: Where<MySqlMd>,
  ): Promise<Count> {
    return this.firstapiMysqlRepository.count(where);
  }

  @get('/MySapi')
  @response(200, {
    description: 'Array of MySqlMd model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(MySqlMd, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(MySqlMd) filter?: Filter<MySqlMd>,
  ): Promise<MySqlMd[]> {
    return this.firstapiMysqlRepository.find(filter);
  }

  @patch('/MySapi')
  @response(200, {
    description: 'MySqlMd PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MySqlMd, {partial: true}),
        },
      },
    })
    mySqlMd: MySqlMd,
    @param.where(MySqlMd) where?: Where<MySqlMd>,
  ): Promise<Count> {
    return this.firstapiMysqlRepository.updateAll(mySqlMd, where);
  }

  @get('/MySapi/{id}')
  @response(200, {
    description: 'MySqlMd model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(MySqlMd, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(MySqlMd, {exclude: 'where'}) filter?: FilterExcludingWhere<MySqlMd>
  ): Promise<MySqlMd> {
    return this.firstapiMysqlRepository.findById(id, filter);
  }

  @patch('/MySapi/{id}')
  @response(204, {
    description: 'MySqlMd PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MySqlMd, {partial: true}),
        },
      },
    })
    mySqlMd: MySqlMd,
  ): Promise<void> {
    await this.firstapiMysqlRepository.updateById(id, mySqlMd);
  }

  @put('/MySapi/{id}')
  @response(204, {
    description: 'MySqlMd PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() mySqlMd: MySqlMd,
  ): Promise<void> {
    await this.firstapiMysqlRepository.replaceById(id, mySqlMd);
  }

  @del('/MySapi/{id}')
  @response(204, {
    description: 'MySqlMd DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.firstapiMysqlRepository.deleteById(id);
  }
}
