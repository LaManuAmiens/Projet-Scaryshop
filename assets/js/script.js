// on creer un objet shopApp auquel on affecte le module "shopApp" puis on injecte la dépendance ngRoute.
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
// a l'execution du site, on va chercher les données du json puis on les lit.
shopApp.run(function($rootScope, $http){
  $http.get("assets/json/products.json")
  .then(function(res){
    $rootScope.products = res.data;
  })
  //Cette ligne nous permet de créer un tableau à la racine du site (accessible sur n'importe qu'elle view).
  $rootScope.cart = [];
});
// On déclare nos controllers qui vont controller les différentes view.
shopApp.controller("costumesCtrl",function($scope, $rootScope){
  $scope.addCart = function () {
// Cette ligne nous sert à insérer les données du json dans une nouvelle ligne dans le tableau cart. 
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
