import knex from 'knex';

export default knex({
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: { filename: 'employees.db' }
});
