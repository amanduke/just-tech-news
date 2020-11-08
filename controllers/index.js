const homeRoutes = require('./home-routes.js');
const { Router } = require('express');

Router.use('/', homeRoutes);
