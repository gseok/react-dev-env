const isFunction = obj => !!(obj && obj.constructor && obj.call && obj.apply);

module.exports = env => {
  if (!env || !env.target) {
    console.error('build target is not setup in webpack env option');
    return;
  }

  console.log(`env = ${JSON.stringify({NODE_ENV: 'development', ...env}, null, 4)}`);
  const targetConf = require(`./webpack.config.${env.target}.js`);
  return isFunction(targetConf) ? targetConf({NODE_ENV: 'development', ...env}) : targetConf;
}
