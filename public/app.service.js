"use strict"

function CartService($http) {
    const self = this;
    self.getCartItems = function() {
        return $http({
            method: "GET",
            url: "/change"
        })
    }
    self.addItem = function(newItem) {
        return $http({
            method: "POST",
            url: "colors/",
            data: {color: newColor}
        })
    }

}

angular
    .module("App")
    .service("CartService", CartService)









