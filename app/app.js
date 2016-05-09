"use strict";

(function(){
  angular
  .module("food", ["ui.router"])
  .config(["$stateProvider", RouterFunction])

  .controller("FoodHomeController", FoodHomeControllerFunc);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("foodHome", {
      url: '/',
      templateUrl: "js/foods/home.html",
    })
  }



})();
