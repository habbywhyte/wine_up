"use strict";



(function(){
  angular
  .module("food", ["ui.router"])
  .config(["$stateProvider", RouterFunction])

  //
  // .controller("FoodIndexController", FoodIndexControllerFunc);
  //
  function RouterFunction($stateProvider){
    $stateProvider
    .state("welcome", {
      url: "/",
      templateUrl: "app/welcome.html"
    })

    .state("foodHome", {
      url: '/foods',
      templateUrl: "app/foods/foods.html",
      controller: "FoodIndexController",
      controllerAs: "showVm"
       views: {
          '':{ templateUrls: 'index.html'},
          'foods' : { templateUrl: 'views/foods.html'},
          'wine' : { templateUrl: 'views/wine.html'},
      },
      params: {
          'food_1': {value: null}, //set value it default to null if not passed
          'food_2': {value: null},
          'food_3': {value: null},
      },
      controller: function($scope, $stateParams) {
          //pass URL
          $scope.name = $stateParams.name;
          //pass data for artist page
          $scope.food_1 = $stateParams.food_1;
          $scope.food_2 = $stateParams.food_2;
          $scope.food_3 = $stateParams.food_3;
      }
    })
  });



  //
  //   .state("foodIndex", {
  //     url: "/foods",
  //     templateUrl: "js/foods/index.html",
  //     controller: "FoodIndexController",
  //     controllerAs: "indexVm"})
  //
  }



})();
