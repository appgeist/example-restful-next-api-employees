import methods from '@appgeist/restful-next-api';

import Department from '~/models/Department';
import idSchema from '~/schema/id';
import departmentSchema from '~/schema/department';

export default methods({
  get: {
    querySchema: idSchema,

    handler: ({ query: { id } }) =>
      Department.query()
        .findById(id)
        .throwIfNotFound()
  },

  patch: {
    querySchema: idSchema,
    bodySchema: departmentSchema,

    handler: ({ query: { id }, body }) =>
      Department.query()
        .updateAndFetchById(id, body)
        .throwIfNotFound()
  },

  delete: {
    querySchema: idSchema,

    handler: ({ query: { id } }) =>
      Department.query()
        .deleteById(id)
        .throwIfNotFound()
        .return(undefined)
  }
});
