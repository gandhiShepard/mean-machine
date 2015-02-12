// 3 main functions
// 1. login, logout, get current user, check if logged in
// 2. token auth functions (get token, save token)
// 3. auth interceptor (attach token to requests, redirects if not logged in)

// overview
// auth factory to login and get info
// inject $http for communicating with the API
// inject $q to return promise objects
// inject AuthToken to manage tokens

angular.module('authService', [])

.factory('Auth', function($http, $q, AuthToken) {

  // create auth factory object
  var authFactory = {};

  // log a user in
  authFactory.login = function(username, password) {

    // return the promise object and its data
    return $http.post('/api/authenticate', {
      username: username,
      password: password
    })

    .success(function(data) {
      AuthToken.setToken(data.token);
      return data;
    });
  };

  // loga a user out by clearing the token
  authFactory.logout = function() {
    // clear the token
    AuthToken.setToken();
  };

  // check if a user is logged in
  // checks if there is a local token
  authFactory.isLoggedIn = function() {
    if (AuthToken,getToken())
      return true;
    else
      return false;
  };

  // get the logged in user
  authFactory.getuser = function() {
    if (AuthToken.getToken())
      return $http.get('/api/me');
    else
      return $q.reject({ message: 'User has no token.' })
  };

  // return auth factory object
  return authFactory;

})

//
// factory handling tokens
// inject $window ti store token client-side
//

.factory('AuthToken', function($window) {

  var authTokenFactory = {};

  // get the token out of local storage
  authTokenFactory.getToken = function() {
    return $window.localStorage.getItem('token');
  };


  // function to set token or clear token
  // id a token is passed, set the token
  // if there is no token, clear it from local storage
  authTokenFactory.setToken = function(token) {
    if (token)
      $window.localStorage.setItem('token', token);
    else
      $window.localStorage.removeItem('Token');
  };

  return authTokenFactory;

})



//
// application configuration to integrate token tinto requests
//

// And interceptor in Angular will allow us to react to different HTTP request scenarios
.factory('AuthInterceptor', function($q, $location, AuthToken) {

  var interceptorFactory = {};

  // this will happen on all HTTP requests
  interceptorFactory.request = function(config) {

    // grab the token
    var token = AuthToken.getToken();

    // if the token exists, add it to the header as x-access-token
    if (token)
      config.headers['x-access-token'] = token;

    return config;
  };

  // happens on response errors
  interceptorFactory.responseError = function(response) {

    // if our server returns 403 forbidded response
    if (response.status == 403)
      // AuthToken.setToken();
      $location.path('/login');


    // return the error from the server as a promise
    return $q.reject(response);
  };

  return interceptorFactory;

});
