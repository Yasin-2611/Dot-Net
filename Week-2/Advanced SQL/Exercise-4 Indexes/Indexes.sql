-- Indexes.sql
-- Week‑2 Advanced SQL Exercise‑4: Demonstrate indexes on the Customers table

USE CognizantDB;
GO

/*
   The Customers table already has a PRIMARY KEY on CustomerID.
   In SQL Server the primary key creates a CLUSTERED index by default
   unless a NONCLUSTERED PK is explicitly specified. Therefore no
   additional clustered index is required.
*/

/* Create a NON‑CLUSTERED index on CustomerName if it does not already exist */
IF NOT EXISTS (
    SELECT 1 FROM sys.indexes i
    JOIN sys.objects o ON i.object_id = o.object_id
    WHERE o.name = 'Customers' AND i.name = 'IX_Customers_CustomerName'
)
BEGIN
    CREATE NONCLUSTERED INDEX IX_Customers_CustomerName
        ON dbo.Customers (CustomerName);
END;
GO

/* Display indexes for the Customers table */
SELECT 
    i.name AS IndexName,
    i.type_desc AS IndexType,
    i.is_primary_key,
    i.is_unique,
    c.name AS ColumnName
FROM sys.indexes i
JOIN sys.index_columns ic ON i.object_id = ic.object_id AND i.index_id = ic.index_id
JOIN sys.columns c ON ic.object_id = c.object_id AND ic.column_id = c.column_id
JOIN sys.objects o ON i.object_id = o.object_id
WHERE o.name = 'Customers'
ORDER BY i.name, ic.key_ordinal;
GO

/* Sample query that benefits from the non‑clustered index on CustomerName */
SELECT CustomerID, CustomerName, City, Balance
FROM dbo.Customers
WHERE CustomerName = 'Beta Ltd';
GO
