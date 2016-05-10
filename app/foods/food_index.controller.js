"use strict";

(function(){
  angular
    .module("food")
    .controller("FoodIndexController", [
      ControllerFunction
    ])

      function ControllerFunction() {
        var indexVm = this;


        indexVm.entries = [
          {name: "hot dog", photo_url: "http://fillmurray.com/300/200"},
          {name: "burger", photo_url: "http://fillmurray.com/300/200"}
        ];
        indexVm.newEntry = {};

        indexVm.create = function() {
          dummyData.push(indexVm.newEntry);
          indexVm.newEntry = {};
        }
      }

})();
