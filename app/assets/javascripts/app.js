"use strict";

(function(){
  angular
    .module("cork_fork", [
      "ui.router",
      "wines"
    ])
    .config([
      "$stateProvider",
      RouterFunc
    ])


    function RouterFunc($stateProvider) {

      $stateProvider

      .state("welcome", {
        url:"/",
        templateUrl: "./index.html"
      })
    }







})();
