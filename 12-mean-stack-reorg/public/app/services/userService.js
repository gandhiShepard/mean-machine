// access and API
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


  // update a user


  // delete a user


  // return our entier userFactory objecct
  return userFactory;
})
