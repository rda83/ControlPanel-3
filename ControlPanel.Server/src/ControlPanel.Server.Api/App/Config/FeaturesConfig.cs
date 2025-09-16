using ControlPanel.Server.Api.App.Features.Catalogs.Products.Lib;
using ControlPanel.Server.Api.App.Features.JobLogs.Integrations.Lib;

namespace ControlPanel.Server.Api.App.Config
{
    public static class FeaturesConfig
    {
        public static void AddFeatures(this IServiceCollection services)
        {
            services.AddScoped<IProductService, ProductService>();
            services.AddScoped<IIntegrationsEventService, IntegrationsEventService>();
        }
    }
}
