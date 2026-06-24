using System;

public class Search
{
    // Linear Search
    public static Product LinearSearch(Product[] products, int id)
    {
        foreach (Product product in products)
        {
            if (product.ProductId == id)
            {
                return product;
            }
        }

        return null;
    }

    // Binary Search
    public static Product BinarySearch(Product[] products, int id)
    {
        int left = 0;
        int right = products.Length - 1;

        while (left <= right)
        {
            int mid = (left + right) / 2;

            if (products[mid].ProductId == id)
                return products[mid];

            if (products[mid].ProductId < id)
                left = mid + 1;
            else
                right = mid - 1;
        }

        return null;
    }
}