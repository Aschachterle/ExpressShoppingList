
const cartItems = {
    template: `
    <main>
        <div class="title"><h3>SHOPPIN' CART!</h3></div>
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
                <p>{{item.quantity}}</p>
            </div>
            <div class="icons">
                <i class="material-icons">edit</i>
                <i class="material-icons">delete</i>
            </div>
        </div>
    </main>
    
    `,
    controller: ["CartService", function(CartService)  {
        const vm = this;
        CartService.getCartItems().then(response => {
            console.log(response);
            vm.cartList = response.data
        })
    }]
}






angular.module("App")
    .component("cartItems", cartItems)
