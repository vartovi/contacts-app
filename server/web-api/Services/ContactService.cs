using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;
using WebApi.Models;
using WebApi.Repository;

namespace WebApi.Services
{
    public class ContactService : IContactService
    {
        
        //private static string json = System.IO.File.ReadAllText("contacts.json");
        //private readonly List<Contact> contacts = JsonConvert.DeserializeObject<List<Contact>>(json);

        private readonly IContactRepository _contactRepository;

        public ContactService(IContactRepository contactRepository)
        {
            _contactRepository = contactRepository;
        }

        public List<Contact> FindAllContacts()
        {
            //var contacts = JsonConvert.DeserializeObject<List<Contact>>(json);
            return _contactRepository.FindAll();
        }

        public Contact FindContactById(int id)
        {
            //var contacts = JsonConvert.DeserializeObject<List<Contact>>(json);
            //var contact = contacts[id];
            //return contacts.FirstOrDefault(c => c.Id == id);
            return _contactRepository.FindById(id);
        }

        public void CreateNewContact(Contact contact)
        {
            //contacts.Add(new Contact(GetId(), contact.FirstName, contact.LastName, contact.Phone, contact.StreetAddress, contact.City));
            //json = JsonConvert.SerializeObject(contacts);
            //System.IO.File.WriteAllText("contacts.json", json);
            //return contacts;
            _contactRepository.Create(contact);
        }

        public void UpdateContact(Contact contact)
        {
          
            //var index = contacts.FindIndex(c => c.Id == id);
            //contacts[index] = contact;
            //json = JsonConvert.SerializeObject(contacts);
            //System.IO.File.WriteAllText("contacts.json", json);
            //return contact;
            _contactRepository.Update(contact);
        }

        public void DeleteContact(int id)
        {
            //contacts.RemoveAll(c => c.Id == id);
            //json = JsonConvert.SerializeObject(contacts);
            //System.IO.File.WriteAllText("contacts.json", json);
            _contactRepository.Delete(id);
           
        }

        /*private int GetId()
        {
            var lastSaved = contacts.OrderByDescending(c => c.Id).FirstOrDefault();
            if (lastSaved != null)
            {
                return lastSaved.Id + 1;
            }
            return 1;
        }*/
    }
}
