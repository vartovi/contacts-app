﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Contexts;
using WebApi.Models;

namespace WebApi.Repository
{
    public class ContactRepository : IContactRepository
    {
        private readonly ContactsContext _context;

        public ContactRepository(ContactsContext context)
        {
            _context = context;
        }

        public List<Contact> FindAll()
        {
            var contacts = _context.Contact.ToList();
            return contacts;
        }

        public Contact FindById(int id)
        {
            var contact = _context.Contact.FirstOrDefault(c => c.Id == id);
            return contact;
        }

        public void Create(Contact contact)
        {
            _context.Contact.Add(contact);
            _context.SaveChanges();
        }

        public void Update(Contact contact)
        {
            _context.Contact.Update(contact);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var contact = _context.Contact.FirstOrDefault(c => c.Id == id);
            if (contact != null)
            {
                _context.Contact.Remove(contact);
                _context.SaveChanges();
            }
            else
            {
                //TODO
                Debug.WriteLine("#ContactRepository, No contact found for id " + id);
            }
        }
    }
}
