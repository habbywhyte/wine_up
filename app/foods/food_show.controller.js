"use strict";

(function(){
  angular
    .module("foods")
    .controller("FoodShowController", [
      "FoodsFactory",
      "$stateParams",
      ControllerFunction
    ])

      function ControllerFunction(FoodsFactory, $stateParams) {
        this.food = FoodsFactory.get({id: $stateParams.id});
      }

})();
