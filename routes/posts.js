var express = require('express');
var router = express.Router();
var logger = require('morgan');
var post_controller = require('../controllers/post.controller');
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
var jwtAuthz = require('express-jwt-authz');


var authCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://mlkblog.eu.auth0.com/.well-known/jwks.json",
    strictSsl: false
  }),
  // This is the identifier we set when we created the API
  audience: 'http://localhost:3000',
  issuer: "https://mlkblog.eu.auth0.com/", // e.g., you.auth0.com
  algorithms: ['RS256']
});

var checkScopes = jwtAuthz([ 'openid' ]);
/* GET posts. */
// uncomment this line to enable oauth2 authentication
//router.get('/', authCheck, post_controller.getAll);
router.get('/', post_controller.getAll);
/* GET post by ID */
// uncomment this line to enable oauth2 authentication
//router.get('/:id', authCheck, post_controller.getPostById);
router.get('/:id', post_controller.getPostById);
/* POST a post */
// uncomment this line to enable oauth2 authentication
//router.post('/new', authCheck, post_controller.save);
router.post('/new', post_controller.save);

module.exports = router;