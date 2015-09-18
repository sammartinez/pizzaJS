// JavaScript goes here
function Pizza(quanity, pizzaSize, toppings) {
    this.quanity = quanity;
    this.toppings = toppings;
    this.pizzaSize = pizzaSize;
}

Pizza.prototype.fullOrder = function() {
    return this.quanity + " " + this.pizzaSize + " " + this.toppings + " pizza(s)";
}

Pizza.prototype.totalCost = function() {
    var costOfOrder = 0;

    if(this.pizzaSize === "small") {
        costOfOrder = 5 * this.quanity;
    } else if(this.pizzaSize === "medium") {
        costOfOrder = 7 * this.quanity;
    } else if(this.pizzaSize === "large") {
        costOfOrder = 10 * this.quanity
    } else if(this.pizzaSize === "extra-large") {
        costOfOrder = 15 * this.quanity;
    }

    if (this.toppings !== undefined) {
    this.toppings.forEach(function(topping) {
      orderTotal += 1;
    });
  }
    return costOfOrder;
}

$(document).ready(function() {

});
