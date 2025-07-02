using ControlPanel.Server.Api.App.Features.Catalogs.Products.Lib;

namespace ControlPanel.Server.Api.App.Config
{
    public static class FeaturesConfig
    {
        public static void AddFeatures(this IServiceCollection services)
        {
            services.AddScoped<IProductService, ProductService>();
        }
    }
}
