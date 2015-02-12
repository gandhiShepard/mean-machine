# MEAN stack reorg

## Notes
- Angular services are the glue between the front end and the backend. Services are the way we contact an API, get data back, and pass it to our Angular controllers. The controller then passes that info to our views and we have a complete separation of duties.

### 3 types of Angular services
1. service
2. factory
3. provider

**Service** - Simplest. Instantiated with the `new` keyword.You have the ability to add properties to a service and call those props from within your controllers

**Factory** - Most popular. In a factory, you create an object, add properties to that object, and then return it. Your properties and functions will be available in your controllers. They provide a good middle ground of functionality between services and providers.

**Provider** - Complex. The only service that can be passed into the `config()` function to declare application-wide settings

### The $http module
$http module give us a way to communicate with remote HTTP servers.
It will return a Promise object for us to use.

- Example
```javascript

angular.model('myApp', [])

// inject $http into our controller
.controller('mainController', function($http) {

  var vm = this;

  // make an API call
  $http.get('/api/users')
    .then(function(data) {

      // bind the users we receive to vm.users
      vm.users = data.users;
    });
});
```

- Services get the data.
- Controller receives it and sends it to our views.





|     Task     	|          NODE API          	| Angular Service Function 	|
|:------------:	|:--------------------------:	|:------------------------:	|
|  single user 	|   GET /api/users/:user_id  	|          get(id)         	|
|  list users  	|       GET /api/users       	|           all()          	|
| create users 	|       POST /api/users      	|     create(userData)     	|
| update users 	|   PUT /api/users/:user_id  	|   update(id, userData)   	|
| delete users 	| DELETE /api/users/:user_id 	|        delete(id)        	|

- we will need to prefix the function name with the factory name
- User.all()
- User.get(id)



## Angular Authentication

3 main functions
1. login, logout, get current user, check if logged in
2. token auth functions (get token, save token)
3. auth interceptor (attach token to requests, redirects if not logged in)
