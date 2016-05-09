"use strict";

(function(){
  angular
    .module("foods")
    .controller("FoodIndexController", [
      "FoodsFactory",
      ControllerFunction
    ])

    function ControllerFunction(FoodsFactory) {
      this.foods = FoodsFactory.query();
    }

})();
