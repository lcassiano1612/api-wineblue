const EXPRESS = require('express');
const PRODUCT_ROUTE = require('./app/router/product.js');

const APP = EXPRESS();

APP.use(PRODUCT_ROUTE);
APP.use(EXPRESS.json());

APP.listen(process.env.PORT || '3000', () => {
  console.log(`Server is running on port: ${process.env.PORT || '3000'}`);
});
