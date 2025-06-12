using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace ControlPanel.Server.Api.Controllers;

[ApiController]
//[Authorize]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastController> _logger;

    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetWeatherForecast")]
    public IEnumerable<WeatherForecast> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray();
    }

    [HttpPost(Name = "PostWeatherForecast")]
    public async Task<IActionResult> Post()
    {
        using (var reader = new StreamReader(Request.Body))
        {
            string rawJson = await reader.ReadToEndAsync();
            Console.WriteLine(rawJson);
            var data = JObject.Parse(rawJson);

        }

        //return Ok(new PostResponse());
        return BadRequest(new PostResponse() { Status = "logic error" });
    }

    class PostResponse
    {
        public string Status { get; set; } = "success";
    }
}
