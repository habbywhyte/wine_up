"use strict";



(function(){
  angular
  .module("wine_up", ["ui.router","foods"])
  .config(["$stateProvider", RouterFunction])

  //
  // .controller("FoodIndexController", FoodIndexControllerFunc);
  //
  function RouterFunction($stateProvider){
    $stateProvider
    // .state("welcome", {
    //   url: "/",
    //   templateUrl: "app/welcome.html"
    // })

    .state("foodHome", {
      url: '/',
      templateUrl: "app/foods/foods.html",
      controller: "FoodIndexController",
      controllerAs: "indexVm"
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
