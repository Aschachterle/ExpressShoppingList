
const cartItems = {
    template: `
    <main>
        <div class="title"><h3>SHOPPIN' CART!</h3></div>
        <form ng-submit="$ctrl.addItem(newItem)">
            <input type="text" placeholder="product" ng-model="newItem.product">
            <input type="number" placeholder="price" ng-model="newItem.price">
            <input type="number" placeholder="quantity" ng-model="newItem.quantity">
            <button>add</button>
        </form>
        <div class="itemContainer" ng-repeat="item in $ctrl.cartList">
            <div class="items">
                <p>Product:</p>  
                <p>{{item.product}}</p>
            </div>
            <div class="items">
                <p>Price:</p>  
                <p>{{item.price}}</p>
            </div>
            <div class="items">
                <p>Quantity:</p>  
                <input ng-model="itemQuantity" ng-blur="$ctrl.updateItem(item, itemQuantity)" type="text" placeholder="{{item.quantity}}">
            </div>
            <div class="icons">
                <i ng-click="$ctrl.deleteItem(item.id)" class="material-icons">delete</i>
            </div>
        </div>
    </main>
    
    `,
    controller: ["CartService", function(CartService)  {
        const vm = this;

        CartService.getCartItems().then(response => {
            vm.cartList = response.data
        })
        vm.addItem = function(item) {
            CartService.addItem(item).then(function(response) {
                vm.cartList = response.data
            })
        } 
        vm.deleteItem = function(id) {
            CartService.deleteItem(id).then(function(response) {
                vm.cartList = response.data

            })
        }
        vm.updateItem = function (item, itemQuantity) {
            CartService.editItem(item, itemQuantity).then(function(response) {
                vm.cartList = response.data
            })
        }
   

    }]
}






angular.module("App")
    .component("cartItems", cartItems)
