using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using MicroservicesJwt.Models;

namespace MicroservicesJwt.Controllers;

// Question 1: login endpoint that issues a JWT on successful authentication.
[ApiController]
[Route("api/[controller]")]
[AllowAnonymous]
public class AuthController : ControllerBase
{
    private readonly IConfiguration _configuration;

    private static readonly List<User> Users =
    [
        new User { Username = "admin", Password = "admin123", Role = "Admin" },
        new User { Username = "user", Password = "user123", Role = "User" }
    ];

    public AuthController(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginModel model)
    {
        var user = FindValidUser(model);
        if (user is null)
        {
            return Unauthorized();
        }

        var token = GenerateJwtToken(user);
        return Ok(new { Token = token });
    }

    private static User? FindValidUser(LoginModel model)
    {
        return Users.FirstOrDefault(u =>
            u.Username == model.Username && u.Password == model.Password);
    }

    private string GenerateJwtToken(User user)
    {
        // Question 3: embed the role claim so [Authorize(Roles = "Admin")] works.
        var claims = new[]
        {
            new Claim(ClaimTypes.Name, user.Username),
            new Claim(ClaimTypes.Role, user.Role)
        };

        var key = new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]!));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var duration = int.Parse(_configuration["Jwt:DurationInMinutes"] ?? "60");
        var token = new JwtSecurityToken(
            issuer: _configuration["Jwt:Issuer"],
            audience: _configuration["Jwt:Audience"],
            claims: claims,
            expires: DateTime.Now.AddMinutes(duration),
            signingCredentials: creds);

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
