using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace DotnetProject.Model
{
    public class Seed
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new DotnetProjectContext(
                serviceProvider.GetRequiredService<DbContextOptions<DotnetProjectContext>>()))
            {
                if (context.Indexes.Any())
                {
                    return;   // DB has been seeded
                }

                context.Indexes.AddRange(
                    new Index
                    {
                        Message = "Message1",
                        CreateDate = 12,
                        LogType = "info"
                    },
                    new Index
                    {
                        Message = "Message2",
                        CreateDate = 13,
                        LogType = "trace"
                    },
                    new Index
                    {
                        Message = "Message3",
                        CreateDate = 14,
                        LogType = "exception"
                    }
                );
                context.SaveChanges();
            }
        }
    }
}