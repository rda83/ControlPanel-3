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
        public async Task<IActionResult> GetAll()
        {
            var result = await _productService.GetAllAsync();
            return Ok(result);
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Post([FromBody] ProductDto dto)
        {
            await _productService.PostAsync(dto);
            return Ok();
        }
    }
}
