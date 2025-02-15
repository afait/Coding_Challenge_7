// Task 1 - Customer Invoice Calculation

function calculateInvoice(subtotal, taxRate, discount) { // Creates a function using variables subtotal, taxRate, and discount
    let Total = ((subtotal +(subtotal * taxRate)) - discount).toFixed(2);
    console.log(`Invoice Total: $${Total}`);
}; // Calculates the total by adding the subtotal, plus the tax, minus the calculated discount and rounds to two decimal places
calculateInvoice(100, 0.08, 5); // calculates the total of a product with a subtotal of 100 a tax rate of 8% and a $5 discount
calculateInvoice(500, 0.1, 20); // calculates the total of a product with a subtotal of 500 a tax rate of 10% and a $20 discount
