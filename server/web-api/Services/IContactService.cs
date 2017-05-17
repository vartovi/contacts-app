using System.Collections.Generic;
using WebApi.Models;

namespace WebApi.Services
{
    public interface IContactService
    {
        List<Contact> FindAllContacts();
        Contact FindContactById(int id);
        void CreateNewContact(Contact contact);
        void UpdateContact(Contact contact);
        void DeleteContact(int id);
    }
}
