namespace DatingApp.API.Data
{
    public class UserRepository : IUserRepository
    {
        void Add(User user)
        {
            if (user != null)
            {
                if (!_context.User.UserExists(user.username))
                {
                    _context.Users.Add(user);
                    _context.SaveChanges();
                }
            }
        }
    }
}