using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System.IO;
namespace DotnetProject.Model
{
    public class DotnetProjectContexFactory
    {
        public DotnetProjectContext CreateDbContext(string[] args)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
                           .SetBasePath(Directory.GetCurrentDirectory())
                           .AddJsonFile("appsettings.json")
                           .Build();
            var optionsBuilder = new DbContextOptionsBuilder<DotnetProjectContext>();
            optionsBuilder.UseSqlServer(configuration.GetConnectionString("DotnetProjectContext"));

            return new DotnetProjectContext(optionsBuilder.Options);
        }
    }
}