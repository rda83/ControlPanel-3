using AutoMapper;
using ControlPanel.Server.Api.App.Entities.Catalogs.Products;
using ControlPanel.Server.Api.App.Features.Catalogs.Products.Model;
using ControlPanel.Server.Api.App.Shared.Storage;
using Microsoft.EntityFrameworkCore;

namespace ControlPanel.Server.Api.App.Features.Catalogs.Products.Lib
{
    public class ProductService : IProductService
    {
        private readonly AppDbContext _db;
        private readonly IMapper _mapper;

        public ProductService(AppDbContext db, IMapper mapper)
        {
            _db = db;
            _mapper = mapper;
        }

        public async Task<List<ProductDto>> GetAllAsync()
        {
            var entities = await _db.Products.ToListAsync();
            return _mapper.Map<List<ProductDto>>(entities);
        }

        public async Task PostAsync(ProductDto dto)
        {
            var entitiy = _mapper.Map<Product>(dto);
            await _db.Products.AddAsync(entitiy);
            await _db.SaveChangesAsync();
        }
    }
}
