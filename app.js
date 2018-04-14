
    var app = angular.module("myApp",[]);
    app.controller("myCtrl", function($scope,$http){
        $scope.isList = true;
        $scope.listOfItems = [{itemName : 'Apple' , imagePath :'images/apple.jpeg',price: 20,quantity:1,totalAmount:20},
        {itemName : 'milk' , imagePath :'images/milk.jpg',price: 20,quantity:1,totalAmount:20},
        {itemName : 'juice' , imagePath :'images/juice.jpg',price: 20,quantity:1,totalAmount:20}]
        $scope.cartItems = [];
        $scope.addToCart = function(item){
            $scope.cartItems.push(item);
        }
    });
