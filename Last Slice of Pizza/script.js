var app = angular.module("createPizza", []);

app.controller('mainController', function($scope) {
    $scope.cost = "";
    $scope.tCost = "";
    $scope.sizes = [];
    $scope.price = [];
    $scope.toppings = [];
    $scope.toppingCost = [];
    $scope.fullTop = [];
    $scope.addSize = function () {
        if ($scope.sizes.length != 0) {
            $scope.sizes.pop();
            $scope.price.pop();
        }
        $scope.sizes.push({
            size: $scope.pizzaSize
        });

        if ($scope.pizzaSize == "Small") {
            $scope.cost = 5;
            console.log($scope.cost);
        }
        else if ($scope.pizzaSize == "Medium") {
            $scope.cost = 10;
            console.log($scope.cost);
        }
        else if ($scope.pizzaSize == "Large") {
            $scope.cost = 15;
            console.log($scope.cost);
        }
        else if ($scope.pizzaSize == "X-Large") {
            $scope.cost = 20;
            console.log($scope.cost);
        }

        $scope.price.push({
            cost: $scope.cost
        });

        $scope.pricing = $scope.getTotalPrice();
    };

    $scope.getTotalPrice = function() {
        $scope.total = 0;
        for (var i = 0; i < $scope.price.length; i++) {
            $scope.total += $scope.price[i];
        }
        return $scope.total;
    }

    $scope.pizza = {
        availToppings: [
            {name: "Pepperoni", images: ["images/pepperoniLeft.png", "images/pepperoniRight.png"]},
            {name: "Sausage", images: ["images/sausageLeft.png", "images/sausageRight.png"]},
            {name: "Bacon", images: ["images/baconLeft.png", "images/baconRight.png"]},
            {name: "Ham", images: ["images/hamLeft.png", "images/hamRight.png"]},
            {name: "Grilled Chicken", images: ["images/chickenLeft.png", "images/chickenRight.png"]},
            {name: "Salami", images: ["images/salamiLeft.png", "images/salamiRight.png"]},
            {name: "Beef", images: ["images/beefLeft.png", "images/beefRight.png"]},
            {name: "Jalapenos", images: ["images/jalapenoLeft.png", "images/jalapenoRight.png"]},
            {name: "Pineapple", images: ["images/pineappleLeft.png", "images/pineappleRight.png"]},
            {name: "Mushrooms", images: ["images/mushroomLeft.png", "images/mushroomRight.png"]}
        ]
    }

    $scope.addTopping = function(evt) {
<<<<<<< HEAD
        console.log(evt.name);
=======
        console.log(evt);
        var pizza = document.getElementById('pizza-image');
<<<<<<< HEAD
        var toppingLeft = '<img class="toppingLeft" src="' + evt.images[0] + '">';
        var toppingRight = '<img class="toppingRight" src="' + evt.images[1] + '">';
        toppingLeft += '<img class="toppingLeft" src="' + evt.images[0] + '">';
        toppingRight += '<img class="toppingRight" src="' + evt.images[1] + '">';
        pizza.innerHTML += toppingLeft;
        pizza.innerHTML += toppingRight;
            
=======
        var topping = '<img class="topping" src="' + evt.images[0] + '">';
        topping += '<img class="topping" src="' + evt.images[1] + '">';
        pizza.innerHTML += topping;        
>>>>>>> 50129e0254e49e68e9533a0825bc9104d38ceaba
        $scope.toppings.push({
            topping: evt.name
        });
        if ($scope.toppings.length == 1) {
            $scope.tCost = 0;
            console.log($scope.tCost);
        }
        else {
            $scope.tCost = 1;
        }
        $scope.toppingCost.push({
            cost: $scope.tCost
        });
<<<<<<< HEAD
        $scope.fullTop = $scope.toppings.map(function(value, index) {
            return {
                topping: value,
                cost: $scope.toppingCost[index]
            }
        });
        console.log(evt);
        var pizza = document.getElementById('pizza-image');
        var topping = '<img class="topping" src="' + evt.images[0] + '">';
        topping += '<img class="topping" src="' + evt.images[1] + '">';
        pizza.innerHTML += topping;       
    }
});