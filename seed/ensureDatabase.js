const { join: joinPaths } = require('path');
const fileExists = require('@appgeist/file-exists');
const exec = require('@appgeist/exec');

const DB_FILE = 'employees.db';
const SOURCE = joinPaths(__dirname, DB_FILE);
const DESTINATION = joinPaths(__dirname, '..', DB_FILE);

module.exports = async () => {
  if (!(await fileExists(DESTINATION))) await exec(`cp ${SOURCE} ${DESTINATION}`);
};
