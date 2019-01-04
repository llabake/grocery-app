import dotenv from 'dotenv';

dotenv.config();
const defaults = {
  prefix: 'mongodb',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
};

const config = {
  development: {
    ...defaults,
    database: process.env.DATABASE_URL_DEV,
  },
  test: {
    ...defaults,
    database: process.env.DATABASE_URL_TEST,
  },
  production: {
    use_env_variable: 'MONGODB_URI',
  },
};

module.exports = config[process.env.NODE_ENV || 'development'];