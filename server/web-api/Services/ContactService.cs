using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;
using WebApi.Models;

namespace WebApi.Services
{
    public class ContactService
    {
        
        private static string json = System.IO.File.ReadAllText("contacts.json");
        private readonly List<Contact> contacts = JsonConvert.DeserializeObject<List<Contact>>(json);
  
        public List<Contact> FindAllContacts()
        {
            //var contacts = JsonConvert.DeserializeObject<List<Contact>>(json);
            return contacts;
        }

        public Contact FindContactById(int id)
        {
            //var contacts = JsonConvert.DeserializeObject<List<Contact>>(json);
            //var contact = contacts[id];
            return contacts.FirstOrDefault(c => c.Id == id);
        }

        public List<Contact> CreateNewContact(Contact contact)
        {
            contacts.Add(new Contact(GetId(), contact.FirstName, contact.LastName, contact.Phone, contact.StreetAddress, contact.City));
            json = JsonConvert.SerializeObject(contacts);
            System.IO.File.WriteAllText("contacts.json", json);
            return contacts;
        }

        public Contact UpdateContact(int id, Contact contact)
        {
            //var contactToUpdate = contacts[id];
            //var index = contacts.IndexOf(contactToUpdate);
            var index = contacts.FindIndex(c => c.Id == id);
            contacts[index] = contact;
            json = JsonConvert.SerializeObject(contacts);
            System.IO.File.WriteAllText("contacts.json", json);
            return contact;
        }

        public void DeleteContact(int id)
        {
            //var contactToDelete = contacts.FirstOrDefault(c => c.Id == id);
            //contacts.RemoveAt(id);
            contacts.RemoveAll(c => c.Id == id);
            json = JsonConvert.SerializeObject(contacts);
            System.IO.File.WriteAllText("contacts.json", json);
           
        }

        private int GetId()
        {
            var lastSaved = contacts.OrderByDescending(c => c.Id).FirstOrDefault();
            if (lastSaved != null)
            {
                return lastSaved.Id + 1;
            }
            return 1;
        }
    }
}
