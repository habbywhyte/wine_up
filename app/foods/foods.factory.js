"use strict";

(function(){
  angular
    .module("foods")
    .factory("FoodsFactory", [
      "$resource",
      FoodsFactoryFunction
    ])

    function FoodsFactoryFunction($resource) {
      return $resource("http://wine-up-api.herokuapp.com/foods/:id");
    }

})();
