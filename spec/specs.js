describe('Pizza', function() {
    it("creates the pizza the customer ordered.", function() {
        var testPizza = new Pizza(1, "large", "pepperoni");
        expect(testPizza.quanity).to.equal(1);
        expect(testPizza.pizzaSize).to.equal("large");
        expect(testPizza.toppings).to.equal("pepperoni");
    });
    it("adds multiple toppings to a single pizza", function() {
        var testPizza = new Pizza(1, "small", ["sausage", "pepperoni", "pineapple"]);
        expect(testPizza.toppings).to.eql(["sausage", "pepperoni", "pineapple"]);
    });

//For the following tests below, this is where I use the Pizza.prototype.totalCost function.
    it("charges the customer $5 for a small pizza", function() {
        var testPizza = new Pizza(1, "small");
        expect(testPizza.totalCost()).to.equal(5);
    });
    it("charges the customer $7 for a medium pizza", function() {
        var testPizza = new Pizza(1, "medium");
        expect(testPizza.totalCost()).to.equal(7);
    });
    it("charges the customer $10 for a large pizza", function() {
        var testPizza = new Pizza(1, "large");
        expect(testPizza.totalCost()).to.equal(10);
    });
    it("charges the customer $15 for a extra-large pizza", function() {
        var testPizza = new Pizza(1, "extra-large");
        expect(testPizza.totalCost()).to.equal(15);
    });
    it("charges the customer $10 for two small pizzas", function() {
        var testPizza = new Pizza(2, "small");
        expect(testPizza.totalCost()).to.equal(10);
    });
    it("charges the customer $14 for two medium pizzas", function() {
        var testPizza = new Pizza(2, "medium");
        expect(testPizza.totalCost()).to.equal(14);
    });
    it("charges the customer $20 for two large pizzas", function() {
        var testPizza = new Pizza(2, "large");
        expect(testPizza.totalCost()).to.equal(20);
    });
    it("charges the customer $30 for two extra-large pizzas", function() {
        var testPizza = new Pizza(2, "extra-large");
        expect(testPizza.totalCost()).to.equal(30);
    });
});
