/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },

  'POST  /api/v1/user/signup': { action: 'user/signup' },
  'POST  /api/v1/user/login': { action: 'user/login' },
  'POST  /api/v1/order/create': { action: 'order/create' },
  'POST  /api/v1/products/create': { action: 'products/create' },
  'GET  /api/v1/order/view/': { action: 'order/allview' },
  'GET  /api/v1/order/view/:id': { action: 'order/view' },
  'GET  /api/v1/products/view': { action: 'products/view' },
  'GET  /api/v1/products/view/:id': { action: 'products/viewone' },
  'PUT  /api/v1/order/update/:id': { action: 'order/update' }

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
