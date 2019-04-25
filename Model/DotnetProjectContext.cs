using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace DotnetProject.Model
{
    public class DotnetProjectContext : DbContext
    {
        public DotnetProjectContext(DbContextOptions<DotnetProjectContext> options)
            : base(options)
        {
        }

        public DbSet<Index> Indexes { get; set; }
    }
}