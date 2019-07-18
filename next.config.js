const { execSync } = require('child_process');
const { PHASE_PRODUCTION_BUILD, PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const ensureDatabase = require('./seed/ensureDatabase');
const { version: VERSION } = require('./package.json');

module.exports = (phase) => {
  ensureDatabase();

  if (phase === PHASE_PRODUCTION_BUILD) {
    execSync(`rm -rf static/${VERSION}`);
    execSync(`cp -R static/dev static/${VERSION}`);
  }

  return {
    env: { ASSETS_PREFIX: phase === PHASE_DEVELOPMENT_SERVER ? 'dev' : VERSION }
  };
};
