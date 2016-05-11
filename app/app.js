"use strict";

(function(){
  angular
    .module("food", ["ui.router", "ngResource"])
    .config(["$stateProvider", RouterFunction])
    .factory("FoodFactory",["$resource", FoodFactoryFunction])
    .controller("FoodScrollController", ["FoodFactory", FoodScrollControllerFunc]);


  function RouterFunction($stateProvider){
    $stateProvider
    .state("welcome", {
      url: "/",
      templateUrl: "app/welcome.html"
    })
    .state("foodHome", {
      views: {
        'pickFood': {
          templateUrl: 'foods.html',
          controller: 'foodScrollController'
        }
      }
    });
}

    function FoodFactoryFunction($resource){
      return $resource("http://localhost:3000/foods/:id");
    }

    function FoodScrollControllerFunc(FoodFactory){
      var indexVm = this;
      indexVm.foods = FoodFactory.query();
    }

    // $('.dropdown-menu').find('input').click(function(e) {
    //   e.stopPropagation();
    // });



  })();


      // url: '/foods',
      // templateUrl: "app/foods/foods.html",
      // controller: "FoodIndexController",
      // controllerAs: "showVm"




  //
  //   .state("foodIndex", {
  //     url: "/foods",
  //     templateUrl: "js/foods/index.html",
  //     controller: "FoodIndexController",
  //     controllerAs: "indexVm"})
  //
  // }
