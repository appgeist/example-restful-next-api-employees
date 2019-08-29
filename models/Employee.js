import BaseModel from './BaseModel';

export default class Employee extends BaseModel {
  static relationMappings = {
    department: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: this.getModelClass('Department'),
      join: {
        from: 'employees.departmentId',
        to: 'departments.id'
      }
    }
  };
}
