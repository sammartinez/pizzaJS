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

describe('totalCost', function() {
    it("charges $5 for a small pizza", function() {
        var testPizza = new Pizza(1, "small");
        expect(totalCost(testPizza)).to.equal(5);
    });

    it("charges $7 for a medium pizza", function() {
        var testPizza = new Pizza(1, "medium");
        expect(totalCost(testPizza)).to.equal(7);
    });

    it("charges $10 for a large pizza", function() {
        var testPizza = new Pizza(1, "large");
        expect(totalCost(testPizza)).to.equal(10);
    });

    it("charges $10 for two small pizzas", function() {
        var testPizza = new Pizza(2, "small");
        expect(totalCost(testPizza)).to.equal(10);
    });

    it("charges $14 for two medium pizzas", function() {
        var testPizza = new Pizza(2, "medium");
        expect(totalCost(testPizza)).to.equal(14);
    });

    it("charges $20 for two large pizzas", function() {
        var testPizza = new Pizza(2, "large");
        expect(totalCost(testPizza)).to.equal(20);
    });
});
