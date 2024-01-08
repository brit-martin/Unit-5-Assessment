//Problem 1

SELECT email FROM customers ORDER BY email; 

//Problem 2

SELECT id FROM orders WHERE customer_id = (SELECT id FROM customers WHERE fname = 'Elizabeth' AND lname = 'Crocker'); 

//Problem 3

SELECT SUM(num_cupcakes) FROM orders WHERE processed = 'false';

//Problem 4

SELECT name,SUM(num_cupcakes) FROM cupcakes LEFT JOIN orders ON cupcakes.id = orders.
cupcake_id GROUP BY name  ORDER BY name;

//Problem 5

SELECT email, SUM(num_cupcakes) FROM customers JOIN orders ON customers.id = orders.customer_id GROUP BY email ORDER BY email ASC;

//Problem 6

SELECT fname, lname, email  FROM customers JOIN orders ON customers.id = orders.customer_id JOIN cupcakes ON cupcakes.id = orders.cupcake_id WHERE name = 'funfetti' AND processed = 'true' GROUP BY fname, lname, email ;