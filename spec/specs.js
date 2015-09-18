describe('Pizza', function() {
    it("creates the pizza the customer ordered.", function() {
        var testPizza = new Pizza(1, "pepperoni", "large");
        expect(testPizza.quanity).to.equal(1);
        expect(testPizza.toppings).to.equal("pepperoni");
        expect(testPizza.pizzaSize).to.equal("large");
    });


});
