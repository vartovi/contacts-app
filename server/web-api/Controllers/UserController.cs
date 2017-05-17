using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApi.Services;

namespace WebApi.Controllers
{
    [Route("api/user")]
    [Authorize("Bearer")]
    public class UserController : Controller
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPut]
        public IActionResult Login()
        {
            var user = _userService.FindUserByUsername(User.Identity.Name);
            return new JsonResult(user);
        }
    }
}