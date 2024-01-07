//Problem 1

SELECT email FROM customers ORDER BY email; 

//Problem 2

SELECT id FROM orders WHERE customer_id = (SELECT id FROM customers WHERE fname = 'Elizabeth' AND lname = 'Crocker'); 

//Problem 3

SELECT SUM(num_cupcakes) FROM orders WHERE processed = 'false';

//Problem 4
--this gets them it just doent combine the names together
SELECT name, num_cupcakes FROM cupcakes LEFT JOIN orders ON cupcakes.id = orders.
cupcake_id ORDER BY name;

//Problem 5
-- need to figure out how to combine multiple emails into one
SELECT email, num_cupcakes FROM customers JOIN orders ON customers.id = orders.customer_id ORDER BY email, num_cupcakes DESC;

//Problem 6
--i need to make it so only one name is returned 
SELECT fname, lname, email  FROM customers JOIN orders ON customers.id = orders.customer_id JOIN cupcakes ON cupcakes.id = orders.cupcake_id WHERE name = 'funfetti' AND processed = 'true';