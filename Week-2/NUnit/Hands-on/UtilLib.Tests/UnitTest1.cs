using NUnit.Framework;
using UtilLib;

namespace UtilLib.Tests;

[TestFixture]
public class UrlHostNameParserTests
{
    private UrlHostNameParser _parser;

    [SetUp]
    public void SetUp()
    {
        _parser = new UrlHostNameParser();
    }

    // Parameterized test for valid URLs
    [Test]
    [TestCase("http://example.com/path", "example.com")]
    [TestCase("https://sub.domain.org", "sub.domain.org")]
    public void ParseHostName_ValidUrl_ReturnsHostName(string url, string expectedHost)
    {
        var result = _parser.ParseHostName(url);
        Assert.That(result, Is.EqualTo(expectedHost));
    }

    // Test for unsupported protocol throws FormatException
    [Test]
    public void ParseHostName_InvalidProtocol_ThrowsFormatException()
    {
        Assert.Throws<FormatException>(() => _parser.ParseHostName("ftp://fileserver.com"));
    }
}