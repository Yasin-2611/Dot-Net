using NUnit.Framework;
using SeasonsLib;
using System.Collections.Generic;

namespace FourSeasonsLib.Tests
{
    [TestFixture]
    public class SeasonTellerTests
    {
        private SeasonTeller _teller = new SeasonTeller();

        // Approach 1: Method returning IEnumerable<TestCaseData>
        public static IEnumerable<TestCaseData> MonthSeasonCases()
        {
            yield return new TestCaseData("February", "Spring");
            yield return new TestCaseData("March", "Spring");
            yield return new TestCaseData("April", "Summer");
            yield return new TestCaseData("May", "Summer");
            yield return new TestCaseData("June", "Summer");
            yield return new TestCaseData("July", "Monsoon");
            yield return new TestCaseData("August", "Monsoon");
            yield return new TestCaseData("September", "Monsoon");
            yield return new TestCaseData("October", "Autumn");
            yield return new TestCaseData("November", "Autumn");
            yield return new TestCaseData("December", "Winter");
            yield return new TestCaseData("January", "Winter");
        }

        [Test, TestCaseSource(nameof(MonthSeasonCases))]
        public void DisplaySeasonBy_Month_ReturnsExpectedSeason(string month, string expectedSeason)
        {
            var result = _teller.DisplaySeasonBy(month);
            Assert.That(result, Is.EqualTo(expectedSeason));
        }

        // Approach 2: Property returning IEnumerable<object[]>
        public static IEnumerable<object[]> MonthSeasonPairs => new List<object[]>
        {
            new object[] { "February", "Spring" },
            new object[] { "March", "Spring" },
            new object[] { "April", "Summer" },
            new object[] { "May", "Summer" },
            new object[] { "June", "Summer" },
            new object[] { "July", "Monsoon" },
            new object[] { "August", "Monsoon" },
            new object[] { "September", "Monsoon" },
            new object[] { "October", "Autumn" },
            new object[] { "November", "Autumn" },
            new object[] { "December", "Winter" },
            new object[] { "January", "Winter" }
        };

        [Test, TestCaseSource(nameof(MonthSeasonPairs))]
        public void DisplaySeasonBy_UsingPropertySource_ReturnsExpectedSeason(string month, string expectedSeason)
        {
            var result = _teller.DisplaySeasonBy(month);
            Assert.That(result, Is.EqualTo(expectedSeason));
        }
    }
}
