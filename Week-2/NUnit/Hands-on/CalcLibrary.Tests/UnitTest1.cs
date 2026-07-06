using NUnit.Framework;
using CalcLibrary;

namespace CalcLibrary.Tests;

[TestFixture]
public class SimpleCalculatorTests
{
    private SimpleCalculator _calc;

    [SetUp]
    public void SetUp()
    {
        _calc = new SimpleCalculator();
    }

    [TearDown]
    public void TearDown()
    {
        _calc.AllClear();
    }

    // UnitUnderTest_Scenario_ExpectedOutcome
    [Test]
    [TestCase(2, 3, 5)]
    [TestCase(-1, -1, -2)]
    [TestCase(0, 5, 5)]
    public void Addition_ValidInputs_ReturnsExpectedResult(double a, double b, double expected)
    {
        var result = _calc.Addition(a, b);
        Assert.That(result, Is.EqualTo(expected));
    }


    // Subtraction tests
    [Test]
    [TestCase(5, 3, 2)]
    [TestCase(-2, -3, 1)]
    [TestCase(0, 5, -5)]
    public void Subtraction_ValidInputs_ReturnsExpectedResult(double a, double b, double expected)
    {
        var result = _calc.Subtraction(a, b);
        Assert.That(result, Is.EqualTo(expected));
    }

    // Multiplication tests
    [Test]
    [TestCase(2, 3, 6)]
    [TestCase(-1, 5, -5)]
    [TestCase(0, 10, 0)]
    public void Multiplication_ValidInputs_ReturnsExpectedResult(double a, double b, double expected)
    {
        var result = _calc.Multiplication(a, b);
        Assert.That(result, Is.EqualTo(expected));
    }

    // Division tests
    [Test]
    [TestCase(6, 3, 2)]
    [TestCase(-4, 2, -2)]
    public void Division_ValidInputs_ReturnsExpectedResult(double a, double b, double expected)
    {
        var result = _calc.Division(a, b);
        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Division_ByZero_ThrowsArgumentException()
    {
        Assert.Throws<ArgumentException>((TestDelegate)(() => _calc.Division(5, 0)));
    }

    // Handson-2 tests
    [Test]
    public void GetResult_AfterAddition_ReturnsCorrect()
    {
        var result = _calc.Addition(2, 3);
        Assert.That(_calc.GetResult, Is.EqualTo(result));
    }

    [Test]
    public void AllClear_ResetsResultToZero()
    {
        _calc.Addition(5, 5);
        _calc.AllClear();
        Assert.That(_calc.GetResult, Is.EqualTo(0));
    }

    [Test]
    public void Division_ByZero_ThrowsArgumentException_AssertThat()
    {
        Assert.That((TestDelegate)(() => _calc.Division(5, 0)), Throws.TypeOf<ArgumentException>());
    }

}