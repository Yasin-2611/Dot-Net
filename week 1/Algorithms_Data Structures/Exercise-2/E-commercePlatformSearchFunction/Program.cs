using System;

class Program
{
    static void Main(string[] args)
    {
        Product[] products =
        {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Phone", "Electronics"),
            new Product(103, "Shoes", "Fashion"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "Book", "Education")
        };

        int searchId = 103;

        // Linear Search
        Product linearResult = Search.LinearSearch(products, searchId);

        if (linearResult != null)
        {
            Console.WriteLine("Linear Search:");
            Console.WriteLine($"{linearResult.ProductId} {linearResult.ProductName} {linearResult.Category}");
        }
        else
        {
            Console.WriteLine("Product not found.");
        }

        // Binary Search
        Product binaryResult = Search.BinarySearch(products, searchId);

        if (binaryResult != null)
        {
            Console.WriteLine("\nBinary Search:");
            Console.WriteLine($"{binaryResult.ProductId} {binaryResult.ProductName} {binaryResult.Category}");
        }
        else
        {
            Console.WriteLine("Product not found.");
        }
    }
}