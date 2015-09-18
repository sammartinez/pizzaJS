//Base function on the project which takes the three arugments quanity, pizzaSize, and toppings
function Pizza(quanity, pizzaSize, toppings) {
    this.quanity = quanity;
    this.toppings = toppings;
    this.pizzaSize = pizzaSize;
}

//Used to calculate cost of the pizza based on default cost and quanity
Pizza.prototype.totalCost = function() {
    var costOfOrder = 0;

    //Depending on what the user selects, it adds the cost of the pizza times the quanity
    if(this.pizzaSize === "small") {
        costOfOrder = 5 * this.quanity;
    } else if(this.pizzaSize === "medium") {
        costOfOrder = 7 * this.quanity;
    } else if(this.pizzaSize === "large") {
        costOfOrder = 10 * this.quanity
    } else if(this.pizzaSize === "extra-large") {
        costOfOrder = 15 * this.quanity;
    }

    //Adds a $1 for each new topping that is added to the order.
    if (this.toppings !== undefined) {
    this.toppings.forEach(function(topping) {
      costOfOrder += 1;
    });
  }
    return costOfOrder;
}

//JQuery starts here
$(document).ready(function() {
  $("#add-toppings").click(function(event) {
    event.preventDefault();

    /* When the button "Add toppings" is pressed, this dropdown menu will display
    all of the information within the selections listed below */
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

  /* When the submit button is pressed, all of the information from the form calculates
    the cost of the order and displays it within a span at the bottom of the page */
  $("form#new-order").submit(function(event) {
    event.preventDefault();

    var quantity = parseInt($("input#quantity").val());
    var pizzaSize = $("select#sizeOfPizza").val();
    var toppings = [];

    //Takes the toppings selected by the user and pushes it into the blank toppings array.
    $(".new-topping").each(function() {
      toppings.push($("select#toppings").val());
    });

    var newPizzaOrder = new Pizza(quantity, pizzaSize, toppings);

    $("#order-price").text(newPizzaOrder.totalCost());
    $("#results").show();
  });
});
