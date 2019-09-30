import { Model } from 'objection';
import pluralize from 'pluralize';
import { ApiError } from '@appgeist/restful-next-api';
import { NOT_FOUND } from 'http-status-codes';

import db from '~/models/db';

Model.knex(db);

export default class BaseModel extends Model {
  static get tableName() {
    return pluralize(this.name.toLowerCase());
  }

  // eslint-disable-next-line import/no-dynamic-require
  static getModelClass = (className) => require(`../${className}`).default;

  static createNotFoundError = () => new ApiError(NOT_FOUND);
}
