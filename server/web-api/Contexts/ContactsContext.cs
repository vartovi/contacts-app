using WebApi.Models;
using Microsoft.EntityFrameworkCore;

namespace WebApi.Contexts
{
    public class ContactsContext : DbContext
    {
        public ContactsContext(DbContextOptions<ContactsContext> options)
            : base(options) { }

        public DbSet<Contact> Contact { get; set; }
        public DbSet<User> User { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contact>().ToTable("Contact");
            modelBuilder.Entity<User>().ToTable("User");
        }
    }
}
