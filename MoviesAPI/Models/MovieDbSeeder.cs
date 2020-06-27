using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Movies.Helpers;
using MoviesAPI.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace Movies.Models
{
    public static class MovieDbSeeder
    {
        //
      public static void Initialize(MoviesDbContext context)
       // public static void Initialize(IServiceProvider serviceProvider)

        {
             context.Database.EnsureCreated();
					
					//Look for any users.
			  if (!context.Users.Any())
                {
                    context.Users.Add(new User
                    {
                        FirstName = "Diana ",
                        LastName = "Lupei",
                        Username = "lupeidi",
                        Password = HashUtils.GetHashString("parola")
                    });
                    context.SaveChanges();
                }
			 
                // Look for any movies
                // If there are any movies in the DB, the seed initializer returns and no movies are added.
                if (context.Movies.Any())
            {
                return;     // DB has been seeded
            }

            context.Movies.AddRange(
                new Movie
                {
                    Title = "The art of racing in the rain",
                    Description = "heartfelt decription",
                    Genre = 0,
                    Duration = 120,
                    YearOfRelease = 2019,
                    Director = "Simon Curtis",
                    DateAdded = DateTime.Now,
                    Rating = 10,
                    Watched = false
                },

                new Movie
                {
                    Title = "Before sunrise",
                    Description = "romantic description",
                    Genre = 0,
                    Duration = 120,
                    YearOfRelease = 1995,
                    Director = "Richard Linklater",
                    DateAdded = DateTime.Now,
                    Rating = 10,
                    Watched = true
                }
                );

            context.SaveChanges();  // commit transaction
          
        }
    }

}
