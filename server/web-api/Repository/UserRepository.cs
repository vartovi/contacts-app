﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Contexts;
using WebApi.Models;

namespace WebApi.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly ContactsContext _context;

        public UserRepository(ContactsContext context)
        {
            _context = context;
            /*var user = new User("admin", "password");
            if (FindByUsernameAndPassword(user.Username, user.Password) == null)
            {
                _context.User.Add(user);
                _context.SaveChanges();
            }*/
        }

        public User FindByUsername(string username)
        {
            return _context.User.FirstOrDefault(u => u.Username == username);
        }

        public User FindByUsernameAndPassword(string username, string password)
        {
            return _context.User.FirstOrDefault(u => u.Username == username && u.Password == password);
        }

        public User NewUser(string username, string password)
        {
            var user = new User(username, password);
            if (FindByUsername(user.Username) == null)
            {
                _context.User.Add(user);
                _context.SaveChanges();
            }
            return _context.User.FirstOrDefault(u => u.Username == username && u.Password == password);
        }
    }
}
