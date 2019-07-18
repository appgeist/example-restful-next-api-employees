import { object, number, string } from 'yup';

export default object({
  departmentId: number()
    .positive()
    .integer()
    .required(),
  hireDate: string()
    .matches(/^\d{4}-\d{2}-\d{2}$/)
    .required(),
  firstName: string()
    .max(20)
    .required(),
  lastName: string()
    .max(20)
    .required(),
  jobTitle: string()
    .max(20)
    .required()
}).noUnknown();
