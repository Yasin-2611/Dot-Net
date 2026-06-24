using System;

class Program
{
    static void Main(string[] args)
    {
        Logger log1 = Logger.GetInstance();
        Logger log2 = Logger.GetInstance();

        log1.Log("First message");
        log2.Log("Second message");

        // Check whether both references point to same object
        if (log1 == log2)
        {
            Console.WriteLine("Only one Logger instance exists.");
        }
        else
        {
            Console.WriteLine("Multiple instances created.");
        }
    }
}