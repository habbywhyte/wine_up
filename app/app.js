"use strict";

(function(){
  angular
  .module("food", ["ui.router"])
  .config(["$stateProvider", RouterFunction])

  .controller("FoodIndexController", FoodIndexControllerFunc);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("foodHome", {
      url: '/',
      templateUrl: "js/foods/home.html",
    })

    .state("foodIndex", {
      url: "/foods",
      templateUrl: "js/foods/index.html",
      controller: "FoodIndexController",
      controllerAs: "indexVm"})

  }



})();
