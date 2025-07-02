using AutoMapper;
using ControlPanel.Server.Api.App.Entities.Catalogs.Products;

namespace ControlPanel.Server.Api.App.Features.Catalogs.Products.Model
{
    public class ProductProfiles : Profile
    {
        public ProductProfiles()
        {
            CreateMap<ProductDto, Product>();
            CreateMap<Product, ProductDto>();
        }
    }
}
