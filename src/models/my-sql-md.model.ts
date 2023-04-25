import {Entity, model, property} from '@loopback/repository';

@model()
export class MySqlMd extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<MySqlMd>) {
    super(data);
  }
}

export interface MySqlMdRelations {
  // describe navigational properties here
}

export type MySqlMdWithRelations = MySqlMd & MySqlMdRelations;
