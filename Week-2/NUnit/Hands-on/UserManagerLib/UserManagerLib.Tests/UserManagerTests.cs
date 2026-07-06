using NUnit.Framework;
using UserManagerLib;

namespace UserManagerLib.Tests
{
    [TestFixture]
    public class UserManagerTests
    {
        private User _user = new User();

        [Test]
        public void CreateUser_ValidPAN_NoException()
        {
            _user.PANCardNo = "ABCDEFGHIJ"; // 10 chars
            Assert.That(() => _user.CreateUser(_user), Throws.Nothing);
        }

        [Test]
        public void CreateUser_NullPAN_ThrowsNullReferenceException()
        {
            _user.PANCardNo = null;
            Assert.That(() => _user.CreateUser(_user), Throws.TypeOf<NullReferenceException>());
        }

        [Test]
        public void CreateUser_EmptyPAN_ThrowsNullReferenceException()
        {
            _user.PANCardNo = string.Empty;
            Assert.That(() => _user.CreateUser(_user), Throws.TypeOf<NullReferenceException>());
        }

        [Test]
        public void CreateUser_ShortPAN_ThrowsFormatException()
        {
            _user.PANCardNo = "ABC"; // less than 10
            Assert.That(() => _user.CreateUser(_user), Throws.TypeOf<FormatException>());
        }

        [Test]
        public void CreateUser_LongPAN_ThrowsFormatException()
        {
            _user.PANCardNo = "ABCDEFGHIJKLM"; // more than 10
            Assert.That(() => _user.CreateUser(_user), Throws.TypeOf<FormatException>());
        }
    }
}
