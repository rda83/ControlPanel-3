﻿
namespace ControlPanel.Server.Api.App.Features.Catalogs.Products.Model
{
    public class ProductDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int StockQuantity { get; set; }
        public bool IsActive { get; set; } = true;
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime? UpdatedAt { get; set; }
        public string ImageUrl { get; set; }
        public decimal? Rating { get; set; }
    }
}
