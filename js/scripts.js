// JavaScript goes here
function Pizza(quanity, pizzaSize, toppings) {
    this.quanity = quanity;
    this.toppings = toppings;
    this.pizzaSize = pizzaSize;
}

Pizza.prototype.fullOrder = function() {
    return this.quanity + " " + this.pizzaSize + " " + this.toppings + " pizza(s)";
}

function totalCost(order) {
    var orderCost = 0;

    if(order.pizzaSize === "small") {
        orderCost = 5 * order.quanity;
    } else if(order.pizzaSize === "medium") {
        orderCost = 7 * order.quanity;
    } else if (order.pizzaSize === "large") {
        orderCost = 10 * order.quanity;
    }

    // if((order.pizzaSize === "small") && (order.pizzaSize === "medium") && (order.pizzaSize === "large")) {
    //     orderCost = 22;
    // }
    return orderCost;
}
