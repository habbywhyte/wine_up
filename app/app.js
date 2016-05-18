"use strict";

(function(){
  angular

    .module("wine_up", ["ui.router","foods"])
    .config(["$stateProvider", RouterFunction])



    function RouterFunction($stateProvider){
      $stateProvider

      .state("foodHome", {
        url: '/',
        templateUrl: "app/foods/foods.html",
        controller: "FoodIndexController",
        controllerAs: "indexVm"
      })

      .state("foodShow", {
        url: '/food/:id',
        templateUrl: "app/foods/foodshow.html",
        controller: "FoodShowController",
        controllerAs: "showVm"
      })
}

// You guys have some crazy indentation going on in here
// You're mixing the use of double quotes and single quotes. Pick one and use it for everything.

  })();
