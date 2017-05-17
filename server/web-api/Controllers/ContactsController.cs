using System.Collections.Generic;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using WebApi.Models;
using WebApi.Services;

namespace WebApi.Controllers
{
    [EnableCors("CorsPolicy")]
    [Route("api/[controller]")]
    public class ContactsController : Controller
    {
        private readonly IContactService _contactService;

        public ContactsController(IContactService contactService)
        {
            _contactService = contactService;
        }

        [HttpGet]
        public List<Contact> Get()
        {
            return _contactService.FindAllContacts();
        }

        [HttpGet("{id}")]
        public Contact Get(int id)
        {
            return _contactService.FindContactById(id);
        }

        [HttpPost]
        public void Create([FromBody]Contact contact)
        {
            _contactService.CreateNewContact(contact);
        }

        [HttpPut("{id}")]
        public void Update(int id, [FromBody]Contact contact)
        {
            _contactService.UpdateContact(contact);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _contactService.DeleteContact(id);
        }
    }
}
