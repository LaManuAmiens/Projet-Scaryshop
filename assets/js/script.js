var shopApp = angular.module("shopApp", ["ngRoute"]);

//config routeur
shopApp.config(function($routeProvider){
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
});
shopApp.run(function($rootScope, $http){
  $http.get("assets/json/products.json")
  .then(function(res){
    $rootScope.products = res.data;
  })
  $rootScope.cart = [];
});
shopApp.controller("costumesCtrl",function($scope, $rootScope){
  $scope.addCart = function () {
    $rootScope.cart.push($rootScope.products.name);
    console.log($rootScope.products.name);
    console.log($rootScope.cart);
    alert("Votre article à bien été ajouté au panier !");
  }
});
shopApp.controller("decoCtrl", function($scope, $rootScope){
  $scope.addCart = function() {
    $rootScope.cart.push($rootScope.products.name);
    alert("Votre article à bien été ajouté au panier !");
  }
});
shopApp.controller("maquillageCtrl", function($scope, $rootScope){
  $scope.addCart = function() {
    $rootScope.cart.push($rootScope.products.name);
    alert("Votre article à bien été ajouté au panier !");
  }
});
