import { number } from 'yup';

export default {
  id: number()
    .integer()
    .positive()
};
