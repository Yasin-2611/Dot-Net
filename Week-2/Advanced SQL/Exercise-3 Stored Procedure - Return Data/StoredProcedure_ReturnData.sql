-- StoredProcedure_ReturnData.sql
-- Week‑2 Advanced SQL Exercise‑3: Return a customer by ID

USE CognizantDB;
GO

/* Drop existing procedure if present */
IF OBJECT_ID('dbo.sp_GetCustomerByID', 'P') IS NOT NULL
    DROP PROCEDURE dbo.sp_GetCustomerByID;
GO

CREATE PROCEDURE dbo.sp_GetCustomerByID
    @CustomerID INT
AS
BEGIN
    SET NOCOUNT ON;
    SELECT CustomerID, CustomerName, City, Balance
    FROM dbo.Customers
    WHERE CustomerID = @CustomerID;
END;
GO

/* Execute the procedure for CustomerID = 3 */
EXEC dbo.sp_GetCustomerByID @CustomerID = 3;
GO
