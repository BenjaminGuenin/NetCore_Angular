using System.Collections.Generic;
using System.Threading.Tasks;
using DatingApp.API.Models;

namespace DatingApp.API.Data
{
    public interface IDatingRepository
    {
        // WHY?
        // => Because instead of creating two separates methods for adding an user and adding a photo,
        // we can simply create one method and we can specify the type and then save this particular ressource into the Database.
         void Add<T>(T entity) where T: class; // Add an entity of type T that has a constraint of being a class. This entity will be an user at runtime.

        // Idem for Delete
        void Delete<T>(T entity) where T: class;

        // WHY a bool? We want to know if there is 0 or more changes to save into our database.
        // We will check to see if there is one or more changes saved into the DB, if yes we return true, else we return false;
        // If false, either there were no changes to save and an issue has occured.
        Task<bool> SaveAll();

        Task<IEnumerable<User>> GetUsers();
        Task<User> GetUser(int id);
    }
}