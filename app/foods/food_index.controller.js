"use strict";

(function(){
  angular
    .module("foods")
    .controller("FoodIndexController", [
      "FoodsFactory",
      ControllerFunction
    ])

      function ControllerFunction(FoodsFactory) {
        // var indexVm = this;
        this.foods = FoodsFactory.query()

        this.clicker = function(foodName) {
          console.log(foodName);
          // Make sure you remove or comment out nonfunctional code before code reviews
        };

      }

})();
