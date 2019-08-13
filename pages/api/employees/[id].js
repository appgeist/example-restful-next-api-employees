import methods from '@appgeist/restful-next-api';

import Employee from '~/models/Employee';
import idSchema from '~/schema/id';
import employeeSchema from '~/schema/employee';

export default methods({
  get: {
    querySchema: idSchema,

    onRequest: ({ query: { id } }) =>
      Employee.query()
        .findById(id)
        .throwIfNotFound()
  },

  patch: {
    querySchema: idSchema,
    bodySchema: employeeSchema,

    onRequest: ({ query: { id }, body }) =>
      Employee.query()
        .updateAndFetchById(id, body)
        .throwIfNotFound()
  },

  delete: {
    querySchema: idSchema,

    onRequest: ({ query: { id } }) =>
      Employee.query()
        .deleteById(id)
        .throwIfNotFound()
        .return(undefined)
  }
});
