import methods from '@appgeist/restful-next-api';

import Department from '~/models/Department';
import departmentSchema from '~/schema/department';

export default methods({
  get: () =>
    Department.query()
      .select('id', 'name')
      .orderBy('name'),

  post: {
    bodySchema: departmentSchema,

    onRequest: ({ body }) => Department.query().insert(body)
  }
});
