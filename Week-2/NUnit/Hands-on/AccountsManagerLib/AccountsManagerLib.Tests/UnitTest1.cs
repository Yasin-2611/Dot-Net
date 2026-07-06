using AccountsManagerLib;
using NUnit.Framework;

namespace AccountsManagerLib.Tests;

public class AccountsManagerTests
{
    private AccountsManager _manager;

    [SetUp]
    public void Setup()
    {
        _manager = new AccountsManager();
    }

    [Test]
    [TestCase("user_11", "secret@user11", ExpectedResult = "Welcome user_11!!!")]
    [TestCase("user_22", "secret@user22", ExpectedResult = "Welcome user_22!!!")]
    public string ValidateUser_ValidCredentials_ReturnsWelcome(string userId, string password)
    {
        return _manager.ValidateUser(userId, password);
    }

    [Test]
    [TestCase("user_11", "wrongPassword")]
    [TestCase("unknown", "secret@user11")]
    public void ValidateUser_InvalidCredentials_ReturnsInvalid(string userId, string password)
    {
        var result = _manager.ValidateUser(userId, password);
        Assert.That(result, Is.EqualTo("Invalid user id/password"));
    }

    [Test]
    [TestCase(null, "secret@user11")]
    [TestCase("", "secret@user11")]
    [TestCase("user_11", null)]
    [TestCase("user_11", "")]
    public void ValidateUser_MissingParameter_ThrowsFormatException(string userId, string password)
    {
        Assert.That(() => _manager.ValidateUser(userId, password), Throws.TypeOf<FormatException>());
    }
}