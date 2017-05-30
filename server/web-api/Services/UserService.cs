using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;
using WebApi.Repository;

namespace WebApi.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            this._userRepository = userRepository;
        }

        public User FindUserByUsername(string username)
        {
            return _userRepository.FindByUsername(username);
        }

        public User FindUserByUsernameAndPassword(string username, string password)
        {
            return _userRepository.FindByUsernameAndPassword(username, password);
        }

        public User NewUser(string username, string password)
        {
            return _userRepository.NewUser(username, password);
        }
    }
}
