import methods from '@appgeist/restful-next-api';

import Employee from '~/models/Employee';
import employeeSchema from '~/schema/employee';

export default methods({
  get: () =>
    Employee.query()
      .select('id', 'firstName', 'lastName', 'jobTitle')
      .orderBy('firstName')
      .orderBy('lastName'),

  post: {
    bodySchema: employeeSchema,

    handler: ({ body }) => Employee.query().insert(body)
  }
});
