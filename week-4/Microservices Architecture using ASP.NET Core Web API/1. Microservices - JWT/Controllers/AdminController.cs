using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MicroservicesJwt.Controllers;

// Question 3: role-based authorization — only Admin role can access.
[ApiController]
[Route("api/[controller]")]
public class AdminController : ControllerBase
{
    [HttpGet("dashboard")]
    [Authorize(Roles = "Admin")]
    public IActionResult GetAdminDashboard()
    {
        return Ok("Welcome to the admin dashboard.");
    }
}
