-- Functions.sql
-- Week‑2 Advanced SQL Exercise‑5: Scalar and Inline TVFs using the Customers table

USE CognizantDB;
GO

/*------------------------------------------------------------
  Scalar‑valued function: fn_GetCustomerCategory
  Returns a textual category based on the Balance value.
------------------------------------------------------------*/
IF OBJECT_ID('dbo.fn_GetCustomerCategory', 'FN') IS NOT NULL
    DROP FUNCTION dbo.fn_GetCustomerCategory;
GO

CREATE FUNCTION dbo.fn_GetCustomerCategory (@Balance DECIMAL(10,2))
RETURNS VARCHAR(20)
AS
BEGIN
    DECLARE @Category VARCHAR(20);
    IF @Balance >= 50000
        SET @Category = 'Premium';
    ELSE IF @Balance >= 20000
        SET @Category = 'Gold';
    ELSE
        SET @Category = 'Standard';
    RETURN @Category;
END;
GO

/*------------------------------------------------------------
  Inline table‑valued function: fn_GetCustomersByCity
  Returns all customers located in the specified city.
------------------------------------------------------------*/
IF OBJECT_ID('dbo.fn_GetCustomersByCity', 'IF') IS NOT NULL
    DROP FUNCTION dbo.fn_GetCustomersByCity;
GO

CREATE FUNCTION dbo.fn_GetCustomersByCity (@City VARCHAR(50))
RETURNS TABLE
AS
RETURN (
    SELECT CustomerID, CustomerName, City, Balance
    FROM dbo.Customers
    WHERE City = @City
);
GO

/*------------------------------------------------------------
  Demonstration of the functions
------------------------------------------------------------*/
-- Example scalar function call
SELECT dbo.fn_GetCustomerCategory(60000) AS CategoryFor60000;
GO

-- Example inline TVF call (replace 'Chicago' with a city present in the data)
SELECT * FROM dbo.fn_GetCustomersByCity('Chicago');
GO
