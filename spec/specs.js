describe('Pizza', function() {
    it("creates the pizza the customer ordered.", function() {
        var testPizza = new Pizza(1, "large", "pepperoni");
        expect(testPizza.quanity).to.equal(1);
        expect(testPizza.pizzaSize).to.equal("large");
        expect(testPizza.toppings).to.equal("pepperoni");
    });

    it("adds the entire order together", function() {
        var testPizza = new Pizza(2, "medium", "cheese");
        expect(testPizza.fullOrder()).to.equal("2 medium cheese pizza(s)");
    });

    it("adds multiple toppings to a single pizza", function() {
        var testPizza = new Pizza(1, "small", ["sausage", "pepperoni", "pineapple"]);
        expect(testPizza.toppings).to.eql(["sausage", "pepperoni", "pineapple"]);
    });
});

describe('Pizza.totalCost', function() {
    it("charges the customer $5 for a small pizza", function() {
        var testPizza = new Pizza(1, "small");
        expect(testPizza.totalCost()).to.equal(5);
    });
});
