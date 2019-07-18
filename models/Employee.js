import BaseModel from './BaseModel';

export default class Employee extends BaseModel {
  static relationMappings = {
    department: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: 'Department',
      join: {
        from: 'employees.departmentId',
        to: 'departments.id'
      }
    }
  };
}
