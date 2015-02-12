// name our angular app
angular.module('firstApp', [])

  // controller
  .controller('mainController', function() {

    //bind this to vm (view-model)
  var vm = this;

  // define variables and objects on this
  // this lets them be availabel to our views

  // define a basic variable
  vm.message = 'hey there! Come and see how good I look!';

  // define a list of items
  vm.computers = [
    { name: 'macbook Pro', color: 'Silver', nerdness: 7 },
    { name: 'Yoda 2 Pro', color: 'Gray', nerdness: 6 },
    { name: 'Chromebook', color: 'Black', nerdness: 5 }
  ];

  vm.computerData = {};

  vm.addComputer = function() {

    // add a computer to the list
    vm.computers.push({
      name: vm.computerData.name,
      color: vm.computerData.color,
      nerdness: vm.computerData.nerdness
    });

    // after our computer had been added, clear the form
    vm.computerData = {};
  };

});
