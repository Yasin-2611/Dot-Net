-- ExecuteStoredProcedure.sql
-- Week‑2 Advanced SQL Exercise‑6: Execute existing stored procedures

USE CognizantDB;
GO

PRINT '----- All Customers -----';
EXEC dbo.sp_GetAllCustomers;
GO

PRINT '----- Customer ID = 2 -----';
EXEC dbo.sp_GetCustomerByID @CustomerID = 2;
GO
