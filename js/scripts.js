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
      costOfOrder += 1;
    });
  }
    return costOfOrder;
}

$(document).ready(function() {
  $("#add-toppings").click(function(event) {
    event.preventDefault();
    $("#new-topping").append(
      '<div class="form-group new-topping">' +
        '<select id="toppings">' +
          '<option value="pepperoni">Pepperoni</option>' +
          '<option value="bacon">Bacon</option>' +
          '<option value="sausage">Sausage</option>' +
          '<option value="pineapple">Pineapple</option>' +
        '</select>' +
      '</div>')
  });

  $("form#new-order").submit(function(event) {
    event.preventDefault();

    var quantity = parseInt($("input#quantity").val());
    var pizzaSize = $("select#sizeOfPizza").val();
    var toppings = [];

    $(".new-topping").each(function() {
      toppings.push($("select#toppings").val());
    });

    var newPizzaOrder = new Pizza(quantity, pizzaSize, toppings);

    $("#order-price").text(newPizzaOrder.totalCost());
  });
});
