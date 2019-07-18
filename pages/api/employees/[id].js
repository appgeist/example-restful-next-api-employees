import methods from '@appgeist/restful-next-api';

import Employee from '~/models/Employee';
import idSchema from '~/schema/id';
import employeeSchema from '~/schema/employee';

export default methods({
  get: {
    querySchema: idSchema,

    handler: ({ query: { id } }) =>
      Employee.query()
        .findById(id)
        .throwIfNotFound()
  },

  patch: {
    querySchema: idSchema,
    bodySchema: employeeSchema,

    handler: ({ query: { id }, body }) =>
      Employee.query()
        .updateAndFetchById(id, body)
        .throwIfNotFound()
  },

  delete: {
    querySchema: idSchema,

    handler: ({ query: { id } }) =>
      Employee.query()
        .deleteById(id)
        .throwIfNotFound()
        .return(undefined)
  }
});
