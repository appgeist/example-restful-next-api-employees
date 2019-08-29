import BaseModel from './BaseModel';

export default class Department extends BaseModel {
  static relationMappings = {
    employees: {
      relation: BaseModel.HasManyRelation,
      modelClass: this.getModelClass('Employee'),
      join: {
        from: 'departments.id',
        to: 'employees.departmentId'
      }
    }
  };
}
