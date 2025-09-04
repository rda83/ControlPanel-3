using ControlPanel.Server.Api.App.Features.Catalogs.Products.Lib;
using ControlPanel.Server.Api.App.Features.Catalogs.Products.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ControlPanel.Server.Api.App.Features.Catalogs.Products.Api
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;
        public ProductController(IProductService productService)
        {
            _productService = productService;
        }


        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetAll([FromQuery] int skip = 1,
            [FromQuery] int take = 20)
        {
            // TODO:
            // - пагинация
            // - сортировка
            // - фильтрация
            // - обрезка (только нужные данные)

            var result = await _productService.GetAllAsync();

            //return NotFound();
            return Ok(result.OrderBy(i => i.Id).Skip(skip).Take(take));
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Post([FromBody] ProductDto dto)
        {
            await _productService.PostAsync(dto);
            return Ok();
        }

        [HttpPost("seedTestData")]
        [Authorize]
        public async Task<IActionResult> SeedTestData([FromBody] SeedTestDataRequest request)
        {
            await _productService.SeedTestData(request);
            return Ok();
        }
    }
}
