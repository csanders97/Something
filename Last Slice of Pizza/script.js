var app = angular.module("createPizza", []);

app.controller('mainController', function($scope) {
    $scope.cost = "";
    $scope.sizes = [];
    $scope.price = [];
    $scope.addSize = function () {
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
        $scope.intrArr = mapSizeAndPrice();
    };

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
});

function mapSizeAndPrice() {
    var map = [];
    for (var i = 0; i < $scope.sizes.length; i++) {
        map.push({
            'size': $scope.sizes[i],
            'price': $scope.price[i]
        });
    }
    return map;
}