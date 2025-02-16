// Task 1 - Customer Invoice Calculation

function calculateInvoice(subtotal, taxRate, discount) { // Creates a function using variables subtotal, taxRate, and discount
    let Total = ((subtotal +(subtotal * taxRate)) - discount).toFixed(2);
    console.log(`Total Invoice: $${Total}`);
}; // Calculates the total by adding the subtotal, plus the tax, minus the calculated discount and rounds to two decimal places

calculateInvoice(100, 0.08, 5); // calculates the total of a product with a subtotal of 100 a tax rate of 8% and a $5 discount
calculateInvoice(500, 0.1, 20); // calculates the total of a product with a subtotal of 500 a tax rate of 10% and a $20 discount


// Task 2 - Employee Hourly Wage

function calculateHourlyWage(salary, hoursPerWeek) { // Creates a function to calculate employee hourly wage using salary and hours worked per week
    let HourlyWage = (salary / (hoursPerWeek * 52)).toFixed(2);
    console.log(`Hourly Wage: $${HourlyWage}`)
}; // Calculates the hourly wage by dividing salary by hours per week in a year and rounds to two decimal places

calculateHourlyWage(52000, 40); // Calculates the hourly wage of an employee with a $52000 salary that works 40 hours per week
calculateHourlyWage(75000, 35); // Calculates the hourly wage of an employee with a $75000 salary that works 35 hours per week


// Task 3 - Customer Loyalty Discount

const calculateLoyaltyDiscount = (amount, years) => { // Creates an arrow function to calculate the loyalty discount based on the number of years
    let discount = 0
    if (years >= 5) discount = amount * .15;
    else if (years >= 3) discount = amount * .10;
    else discount = amount * .05;
// This function gives a 15% discount to customers of 5 years or more, 10% to 3 years or more, and 5% to three years or less
    console.log(`Discounted Price: $${(amount - discount).toFixed(2)}`);
} // Calculates the discounted price by subtracting the amount-discount and rounds to two decimal places

calculateLoyaltyDiscount(100, 6); // Calculates the Discounted price using the function if price is 100 and years is 6
calculateLoyaltyDiscount(200, 2); // Calculates the Discounted price using the function if price is 200 and years is 2


// Task 4 - Product Shipping Cost Calculation

function calculateShippingCost(weight, location, expedited = false) {
    let originalCost = 0;
    let perlbcost = 0;
    let expeditedCost = 0;
// Create a function to calculate the shipping cost with a base cost, per lb cost, and expedited Cost
    if (location === "USA") {
        originalCost = 5; 
        perlbcost = 0.5;
    } // Makes the base cost 5 with a 0.5 per pound cost if the location is the USA
    else if (location === "Canada") {
        originalCost = 10; 
        perlbcost = 0.7;
    } // Makes the base cost 10 with a 0.7 per pound cost if the location is Canada

    if (expedited === true) {
        expeditedCost = 10;
    }
    else {
        expeditedCost = 0
    }; // Adds on an expedited cost of 10 if expedited is true

    let TotalShippingCost = (originalCost + (weight * perlbcost) + expeditedCost); 
    // Calculates the total shipping cost by adding the original cost, + the calculated weight cost by multiplying weight and perlbcost, and adding expeditedCost if present
    return console.log(`Shipping Cost: $${TotalShippingCost.toFixed(2)}`);
} // Logs the Total shipping cost to two decimal places

    calculateShippingCost(10, "USA", true); // Calculates the shipping cost for a 10lb item in the USA with expedited shipping
    calculateShippingCost(5, "Canada", false); // Calculates the shipping cost for a 5lb item in Canada without expedited shipping


// Task 5 - Business Loan Interest Calculation

function calculateLoanInterest(principal, rate, year) { // Created a function that calculates loan interest using a given principal amount, rate, and years
    let Interest = (principal * rate * year);
    console.log(`Total Interest: $${(Interest).toFixed(2)}`);
} // Function logs the total interest found by multiplying the principal by the rate and the year

calculateLoanInterest(1000, 0.05, 3); // Calculates the loan interest for a $1000 principal at a 5% rate for 3 years
calculateLoanInterest(5000, 0.07, 5); // Calculates the loan interest for a $5000 principal at a 7% rate for 5 years


// Task 6 - Filtering High-Value Transactions

const transactions = [500, 1200, 3000, 800, 2200];
function filterHighValueTransactions(transactions, filterFunction) {
    return transactions.filter(filterFunction);
}
console.log(HighValueTransactions = transactions.filter(transactions => transactions >= 1000));
