# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
SELECT categories.categoryName, products.productName 
FROM [Products]
inner join categories on products.categoryID = categories.categoryID

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
SELECT orders.OrderID, orders.OrderDate, shippers.ShipperName 
FROM [Orders]
inner join shippers on orders.shipperId = shippers.shipperID
WHERE OrderDate < '1997-01-09'


### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
SELECT products.ProductName, orderDetails.Quantity
FROM OrderDetails
inner Join products on products.productID = orderDetails.productID
WHERE OrderID='10251'
Order By products.ProductName

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
SELECT orders.OrderId, customers.CustomerName, employees.LastName as EmployeeLastName
FROM Orders
inner join customers on orders.CustomerId = customers.CustomerId
inner join employees on orders.EmployeeId = employees.EmployeeID

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 