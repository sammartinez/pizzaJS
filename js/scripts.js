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

    if(this.toppings !== "cheese") {
        this.toppings.forEach(function(topping) {
            orderCost += 1;
        )};
    }

    return orderCost;
}

$(document).ready(function() {
    event.preventDefault();

    $("#add-toppings").click(function(event) {
        event.preventDefault();
    $("#new-topping").append("<div class='form-group new-topping'>" +
        "<select id='new-top'>" +
        "<option value='cheese'>Cheese</option>" +
        "<option value='pepperoni'>Pepperoni</option>" +
        "<option value='sausage'>Sausage</option>" +
        "<option value='bacon'>Bacon</option>" +
        "<option value='pineapple'>Pineapple</option>" +
        "</select>" +
        "</div>")
    });

    $("form#new-order").submit(function(event) {
        event.preventDefault();
        var quanity = $("input#quanity").val();
        var pizzaSize = $("select#pizzaSize").val();
        var toppings = [];

        $(".new-topping").each(function() {
            toppings.push("select#new-top").val();
        });

        var newPizza = new Pizza(quanity, pizzaSize, toppings);

        $("#total-cost").text(newPizza.totalCost(order));
    });
});
