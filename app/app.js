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
    })



  //
  //   .state("foodIndex", {
  //     url: "/foods",
  //     templateUrl: "js/foods/index.html",
  //     controller: "FoodIndexController",
  //     controllerAs: "indexVm"})
  //
  }



})();
