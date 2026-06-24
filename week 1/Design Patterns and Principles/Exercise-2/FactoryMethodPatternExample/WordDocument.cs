using System;

public class WordDocument : IDocument
{
    public void Open()
    {
        Console.WriteLine("Word Document Opened");
    }
}