"use strict";

var dummy = [
  {name: "hot dog", photo_url: "dog_photo"},
  {name: "burger", photo_url: "burger_pic"}
];


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
      // controller: "FoodIndexController",
      // controllerAs: "showVm"
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
