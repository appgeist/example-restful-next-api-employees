import BaseModel from './BaseModel';

export default class Department extends BaseModel {
  static relationMappings = {
    employees: {
      relation: BaseModel.HasManyRelation,
      modelClass: 'Employee',
      join: {
        from: 'departments.id',
        to: 'employees.departmentId'
      }
    }
  };
}
