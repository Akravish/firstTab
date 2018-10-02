var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"http://biz-devapi.propertytaxdetective.com/api/"',
  AUTH_API_URL: '"http://auth-devapi.propertytaxdetective.com/api/"',
  STRIPE_APP_KEY : '"pk_test_VN7TirCo7BFMbrzF6RuwYlvT"',
  FACEBOOK_APP_ID: '"1764240293859856"',
  GOOGLE_APP_ID: '"1045956541427-j7tnvbafadbasstsoovdk4clr4ehc5pi.apps.googleusercontent.com"',
  // APP_CLIENT_ID: '"ptdClientApp"',
  APP_CLIENT_ID: '"taxFoxClientApp"',
})
