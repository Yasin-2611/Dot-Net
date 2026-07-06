using NUnit.Framework;
using LeapYearCalculatorLib;

namespace LeapYearCalculatorLib.Tests
{
    [TestFixture]
    public class LeapYearCalculatorTests
    {
        private LeapYearCalculator _calc = new LeapYearCalculator();

        // Leap years
        [TestCase(2000, ExpectedResult = 1)]
        [TestCase(2024, ExpectedResult = 1)]
        [TestCase(2400, ExpectedResult = 1)]
        // Non‑leap years
        [TestCase(1900, ExpectedResult = 0)]
        [TestCase(2023, ExpectedResult = 0)]
        [TestCase(2100, ExpectedResult = 0)]
        // Boundary valid years
        [TestCase(1753, ExpectedResult = 0)]
        [TestCase(9999, ExpectedResult = 0)]
        // Invalid years
        [TestCase(1752, ExpectedResult = -1)]
        [TestCase(10000, ExpectedResult = -1)]
        [TestCase(0, ExpectedResult = -1)]
        [TestCase(-5, ExpectedResult = -1)]
        public int IsLeapYear_ReturnsExpected(int year)
        {
            return _calc.IsLeapYear(year);
        }
    }
}
