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
            //return Ok(_contactService.FindAllContacts());
            return _contactService.FindAllContacts();
        }

        [HttpGet("{id}")]
        public Contact Get(int id)
        {
            //return Ok(_contactService.FindContactById(id));
            return _contactService.FindContactById(id);
        }

        [HttpPost]
        public void Create([FromBody]Contact contact)
        {
            /*if (contact == null)
            {
                return BadRequest();
            }
            return Created($"api/contacts/{contact}", _contactService.CreateNewContact(contact));*/
            _contactService.CreateNewContact(contact);
        }

        [HttpPut("{id}")]
        public void Update(int id, [FromBody]Contact contact)
        {
            //return Accepted(_contactService.UpdateContact(id, contact));
            _contactService.UpdateContact(contact);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            //_contactService.DeleteContact(id);
            //return Ok(_contactService.FindAllContacts());
            _contactService.DeleteContact(id);
        }
    }
}
