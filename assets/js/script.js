var shopApp = angular.module("shopApp", ["ngRoute"]);
shopApp.run(function($rootScope, $http){
  $http.get("assets/json/products.json")
  .then(function(res){
    $rootScope.products = res.data;
  })
})
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
shopApp.controller("costumesCtrl", ["$scope", "$rootScope", function($scope, $rootScope){
  $scope.addCart = function ($scope) {
    if (product.qty >= max) { return; }
    product.qty++;

    console.log(product.qty);
  }
}]);
