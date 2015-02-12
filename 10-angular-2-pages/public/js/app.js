angular.module('routerApp', ['routerRoutes'])

// create the controllers
// this will be the contriller for hte Entire site
.controller('mainController', function() {

  var vm = this; // view main

  // create a bigMessage variable to display in our view
  vm.bigMessage = 'A smooth sea never made a skilled sailor.'
})

// home page specific controller
.controller('homeController', function() {

  var vm = this; // view main

  vm.message = 'This is the homepage!';
})

// about page controller
.controller('aboutController', function() {

  var vm = this; // view main

  vm.message = 'Look! I am an about page.'
})

// contact page controller
.controller('contactController', function() {

  var vm = this;

  vm.message = 'Contact us! JK. This is just as demo.'
});
