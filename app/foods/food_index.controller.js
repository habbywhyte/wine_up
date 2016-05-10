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
        this.foods = FoodsFactory.query();

        // indexVm.entries = [
        //   {name: "hot dog", photo_url: "http://fillmurray.com/300/200"},
        //   {name: "burger", photo_url: "http://fillmurray.com/200/300"}
        // ];
        // indexVm.newEntry = {};
        //
        // indexVm.create = function() {
        //   dummyData.push(indexVm.newEntry);
        //   indexVm.newEntry = {};
        // }
      }

})();
