-- RankingAndWindowFunctions.sql
-- Sample script for Week‑2 Advanced SQL Exercise‑1
-- Demonstrates ROW_NUMBER(), RANK(), DENSE_RANK(), NTILE() with PARTITION BY

IF DB_ID('RankingDemoDB') IS NULL
BEGIN
    CREATE DATABASE RankingDemoDB;
END;
GO

USE RankingDemoDB;
GO

/* Create sample table */
IF OBJECT_ID('dbo.Employees', 'U') IS NOT NULL
    DROP TABLE dbo.Employees;
GO

CREATE TABLE dbo.Employees (
    EmployeeID   INT IDENTITY(1,1) PRIMARY KEY,
    EmployeeName NVARCHAR(50) NOT NULL,
    DepartmentID INT NOT NULL,
    Salary       MONEY NOT NULL
);
GO

/* Insert sample data */
INSERT INTO dbo.Employees (EmployeeName, DepartmentID, Salary) VALUES
('Alice',   1, 90000),
('Bob',     1, 85000),
('Charlie', 1, 85000),
('David',   2, 95000),
('Eve',     2, 92000),
('Frank',   2, 88000),
('Grace',   2, 88000),
('Heidi',   3, 77000),
('Ivan',    3, 73000),
('Judy',    3, 73000);
GO

/* ROW_NUMBER() – unique sequential number within each department ordered by Salary descending */
SELECT DepartmentID,
       EmployeeName,
       Salary,
       ROW_NUMBER() OVER (PARTITION BY DepartmentID ORDER BY Salary DESC) AS RowNum
FROM dbo.Employees
ORDER BY DepartmentID, RowNum;
GO

/* RANK() – same rank for ties, gaps in ranking */
SELECT DepartmentID,
       EmployeeName,
       Salary,
       RANK() OVER (PARTITION BY DepartmentID ORDER BY Salary DESC) AS RankNum
FROM dbo.Employees
ORDER BY DepartmentID, RankNum;
GO

/* DENSE_RANK() – same rank for ties, no gaps */
SELECT DepartmentID,
       EmployeeName,
       Salary,
       DENSE_RANK() OVER (PARTITION BY DepartmentID ORDER BY Salary DESC) AS DenseRankNum
FROM dbo.Employees
ORDER BY DepartmentID, DenseRankNum;
GO

/* NTILE(3) – divide each department's employees into three roughly equal groups */
SELECT DepartmentID,
       EmployeeName,
       Salary,
       NTILE(3) OVER (PARTITION BY DepartmentID ORDER BY Salary DESC) AS NTileGroup
FROM dbo.Employees
ORDER BY DepartmentID, NTileGroup;
GO
