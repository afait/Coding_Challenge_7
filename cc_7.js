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
