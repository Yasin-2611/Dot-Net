using System;

public class Forecast
{
    // Recursive method to calculate future value
    public static double FutureValue(double currentValue, double growthRate, int years)
    {
        if (years == 0)
        {
            return currentValue;
        }

        return FutureValue(currentValue * (1 + growthRate), growthRate, years - 1);
    }
}