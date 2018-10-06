namespace DatingApp.API.Data
{
    public interface IUserRepository
    {
         void Add(User user);
         void Update(User user);
         void Get(User user);
         void Delete(User user);
    }
}