"use strict"

function CartService($http) {
    const self = this;
    self.getCartItems = function() {
        return $http({
            method: "GET",
            url: "/change"
        })
    }
    self.addItem = function(item) {
        return $http({
            method: "POST",
            url: "/change",
            data: item
        })
    }
    self.deleteItem = function(id) {
        return $http({
            method: "DELETE",
            url: `change/${id}`

        })
    }
    self.editItem = function (item, itemQuantity) {
        console.log(item)
        return $http ({
            method: "PUT",
            url: `change/${item.id}`,
            data: {...item, quantity: Number(itemQuantity)}
        })
    }

}

angular
    .module("App")
    .service("CartService", CartService)









