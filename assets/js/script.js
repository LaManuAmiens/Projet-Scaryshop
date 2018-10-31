var shopApp = angular.module("shopApp", ["ngRoute"]);

//config routeur
shopApp.config(["$routeProvider", function($routeProvider){
  $routeProvider
  .when("/accueil",{
    templateUrl: "partials/accueil.html",
    controller: "accueilCtrl"
  })
  .when("/costumes",{
    templateUrl: "partials/costumes.html",
    controller: "costumesCtrl"
  })
  .when("/deco",{
    templateUrl: "partials/deco.html",
    controller: "decoCtrl"
  })
  .when("/maquillage",{
    templateUrl: "partials/maquillage.html",
    controller: "maquillageCtrl"
  })
  .otherwise({
    redirectTo: "/accueil"
  })
}])
