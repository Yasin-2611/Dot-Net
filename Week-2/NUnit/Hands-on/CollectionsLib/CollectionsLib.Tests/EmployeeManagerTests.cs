using System.Linq;
using NUnit.Framework;
using CollectionsLib;

namespace CollectionsLib.Tests;

[TestFixture]
public class EmployeeManagerTests
{
    private EmployeeManager _manager;

    [SetUp]
    public void Setup()
    {
        _manager = new EmployeeManager();
    }

    [Test]
    public void GetEmployees_ShouldNotReturnNull()
    {
        var employees = _manager.GetEmployees();
        Assert.That(employees, Is.Not.Null);
    }

    [Test]
    public void GetEmployees_ShouldContainEmployeeWithId100()
    {
        var employees = _manager.GetEmployees();
        Assert.That(employees.Any(e => e.EmpId == 100), Is.True);
    }

    [Test]
    public void GetEmployees_ShouldHaveUniqueIds()
    {
        var employees = _manager.GetEmployees();
        var ids = employees.Select(e => e.EmpId);
        Assert.That(ids.Distinct().Count(), Is.EqualTo(ids.Count()));
    }

    [Test]
    public void GetEmployees_TwoCallsShouldReturnEqualCollections()
    {
        var first = _manager.GetEmployees();
        var second = _manager.GetEmployees();
        Assert.That(second, Is.EqualTo(first));
    }
}
