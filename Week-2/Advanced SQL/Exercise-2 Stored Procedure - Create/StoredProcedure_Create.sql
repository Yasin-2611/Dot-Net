-- StoredProcedure_Create.sql
-- Week‑2 Advanced SQL Exercise‑2: Create a stored procedure

IF DB_ID('CognizantDB') IS NULL
BEGIN
    CREATE DATABASE CognizantDB;
END;
GO

USE CognizantDB;
GO

/* Create Customers table if it does not exist */
IF OBJECT_ID('dbo.Customers', 'U') IS NULL
BEGIN
    CREATE TABLE dbo.Customers (
        CustomerID   INT PRIMARY KEY,
        CustomerName VARCHAR(100) NOT NULL,
        City         VARCHAR(50)  NOT NULL,
        Balance      DECIMAL(10,2) NOT NULL
    );
END;
GO

/* Insert sample data – only if table is empty */
IF NOT EXISTS (SELECT 1 FROM dbo.Customers);
BEGIN
    INSERT INTO dbo.Customers (CustomerID, CustomerName, City, Balance) VALUES
    (1, 'Acme Corp',      'New York',     1250.75),
    (2, 'Beta Ltd',       'Chicago',      845.20),
    (3, 'Gamma LLC',      'San Francisco', 2300.00),
    (4, 'Delta Inc',      'Austin',       560.40),
    (5, 'Epsilon Co',     'Seattle',      1325.60);
END;
GO

/* Create stored procedure to return all customers */
IF OBJECT_ID('dbo.sp_GetAllCustomers', 'P') IS NOT NULL
    DROP PROCEDURE dbo.sp_GetAllCustomers;
GO

CREATE PROCEDURE dbo.sp_GetAllCustomers
AS
BEGIN
    SET NOCOUNT ON;
    SELECT CustomerID, CustomerName, City, Balance FROM dbo.Customers ORDER BY CustomerID;
END;
GO

/* Execute the stored procedure */
EXEC dbo.sp_GetAllCustomers;
GO
