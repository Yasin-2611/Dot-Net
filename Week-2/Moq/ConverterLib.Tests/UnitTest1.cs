using NUnit.Framework;
using Moq;
using ConverterLib;
using CurrencyConverterApp;

namespace ConverterLib.Tests;

public class ConverterTests
{
    [Test]
    public void Converter_USDToEuro_KnownRate_ReturnsExpectedEuro()
    {
        var mock = new Mock<IDollarToEuroExchangeRateFeed>();
        mock.Setup(m => m.GetActualUSDollarValue()).Returns(0.85);
        var converter = new ConverterLib.Converter(mock.Object);
        double result = converter.USDToEuro(10);
        Assert.That(result, Is.EqualTo(8.5));
        mock.Verify(m => m.GetActualUSDollarValue(), Times.Once());
    }

    [Test]
    public void Converter_USDToEuro_ZeroAmount_ReturnsZero()
    {
        var mock = new Mock<IDollarToEuroExchangeRateFeed>();
        mock.Setup(m => m.GetActualUSDollarValue()).Returns(0.85);
        var converter = new ConverterLib.Converter(mock.Object);
        double result = converter.USDToEuro(0);
        Assert.That(result, Is.EqualTo(0));
        mock.Verify(m => m.GetActualUSDollarValue(), Times.Once());
    }
}
