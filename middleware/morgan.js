const dotenv = require('dotenv');
dotenv.config({ path: '.env' });
const morgan = require('morgan');
const express = require('express');

const app = express();

const NODE_ENV = process.env.NODE_ENV;

if (NODE_ENV === 'development') {
  app.use(morgan('dev'));
  console.log(`mode ${NODE_ENV}`);
}

module.exports = app;
