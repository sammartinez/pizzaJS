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

    switch(order.pizzaSize) {
        case "small":
        orderCost = 5 * order.quanity
        break;

        case "medium":
        orderCost = 7 * order.quanity
        break;

        case "large":
        orderCost = 10 * order.quanity
        break;
    }
    return orderCost;
}

$(document).ready
