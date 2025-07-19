using AutoMapper;
using Bogus;
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

        public async Task SeedTestData(SeedTestDataRequest request)
        {
            var productFaker = new Faker<Product>()
                .RuleFor(p => p.Name, f => f.Commerce.ProductName())
                .RuleFor(p => p.Description, f => f.Lorem.Sentence())
                .RuleFor(p => p.Price, f => f.Finance.Amount(1, 1000, 2))
                .RuleFor(p => p.StockQuantity, f => f.Random.Int(0, 1000))
                .RuleFor(p => p.IsActive, f => f.Random.Bool())
                .RuleFor(p => p.CreatedAt, f => f.Date.PastOffset().UtcDateTime)
                .RuleFor(p => p.UpdatedAt, f => f.Date.RecentOffset().UtcDateTime.OrNull(f))
                .RuleFor(p => p.ImageUrl, f => f.Image.PicsumUrl())
                .RuleFor(p => p.Rating, f => Math.Round(f.Random.Decimal(0, 5), 2));

            var products = productFaker.Generate(request.Count);

            await _db.Products.AddRangeAsync(products);
            await _db.SaveChangesAsync();
        }
    }
}
