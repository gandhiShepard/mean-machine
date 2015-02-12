// access and API
// Our service will return data from our calls to the API

// Note: If your API is hosted on a separate server...
// Then you will need to prefix all these /api/ URLs with your server URL like so: // $http.get('http://example.com/api/users, ...)

amgular.module('userService', [])

.factory('User', function($http) {

  // create a new object
  var userFactory = {};

  // get a single user
  userFactory.get = function(id) {
    return $http.get('/api/users/' + id);
  };

  // get all users
  userFactory.all = function() {
    return $http.get('/api/users/');
  };

  // create a user
  userFactory.create = function(userData) {
    return $http.post('/api/users/', userData);
  };

  // update a user
  userFactory.update = function(id, userData) {
    return $http.put('/api/users/' + id, userData);
  };

  // delete a user
  userFactory.delete = function(id) {
    return $http.delete('/api/users/' + id);
  };

  // return our entier userFactory objecct
  return userFactory;
})
