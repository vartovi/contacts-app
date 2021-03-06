﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Services
{
    public interface IUserService
    {
        User FindUserByUsername(string username);
        User FindUserByUsernameAndPassword(string username, string password);
        User NewUser(string username, string password);
    }
}
