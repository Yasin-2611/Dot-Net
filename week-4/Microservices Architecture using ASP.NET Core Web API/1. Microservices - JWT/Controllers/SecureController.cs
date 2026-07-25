using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MicroservicesJwt.Controllers;

// Question 2: endpoint protected with [Authorize] — requires a valid JWT.
[ApiController]
[Route("api/[controller]")]
public class SecureController : ControllerBase
{
    [HttpGet("data")]
    [Authorize]
    public IActionResult GetSecureData()
    {
        return Ok("This is protected data.");
    }
}
