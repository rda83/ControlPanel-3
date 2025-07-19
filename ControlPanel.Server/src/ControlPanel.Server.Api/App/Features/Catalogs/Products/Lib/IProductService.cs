using ControlPanel.Server.Api.App.Features.Catalogs.Products.Model;

namespace ControlPanel.Server.Api.App.Features.Catalogs.Products.Lib
{
    public interface IProductService
    {
        Task<List<ProductDto>> GetAllAsync();
        Task PostAsync(ProductDto dto);
        Task SeedTestData(SeedTestDataRequest request);
    }
}
