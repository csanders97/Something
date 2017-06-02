var app = angular.module("createPizza", []);

app.controller('mainController', function($scope){
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