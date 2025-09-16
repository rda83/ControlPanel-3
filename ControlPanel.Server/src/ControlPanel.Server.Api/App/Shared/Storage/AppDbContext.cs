using ControlPanel.Server.Api.App.Entities.Auth;
using ControlPanel.Server.Api.App.Entities.Catalogs.Products;
using ControlPanel.Server.Api.App.Entities.Integrations;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace ControlPanel.Server.Api.App.Shared.Storage
{
    public class AppDbContext : IdentityDbContext<User>
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; }
        public DbSet<IntegrationEvent> IntegrationEvents { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
