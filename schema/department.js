import { object, string } from 'yup';

export default object({
  name: string()
    .max(20)
    .required(),
  description: string()
    .max(1000)
    .nullable()
}).noUnknown();
