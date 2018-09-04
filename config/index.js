import * as config from './config.json';

console.log(`Current env ${config}`);

const env = process.env.NODE_ENV;
console.log('ENV: ', env);

if (env === 'local' || env === 'production') {
  const envConfig = config[env];

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}
