using ControlPanel.Server.Api.App.Features.JobLogs.Integrations.Lib;
using ControlPanel.Server.Api.App.Features.JobLogs.Integrations.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ControlPanel.Server.Api.App.Features.JobLogs.Integrations.Api
{
    [ApiController]
    [Route("api/[controller]")]
    public class IntegrationsEventController : ControllerBase
    {
        private readonly IIntegrationsEventService _integrationsEventService;

        public IntegrationsEventController(IIntegrationsEventService integrationsEventService)
        {
            _integrationsEventService = integrationsEventService;
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetAll([FromQuery] int skip = 0,
            [FromQuery] int take = 10)
        {
            // TODO:
            // - пагинация
            // - сортировка
            // - фильтрация
            // - обрезка (только нужные данные)

            var response = await _integrationsEventService.GetAsync(skip, take);

            Thread.Sleep(500);

            return Ok(response);
        }


        [HttpPost("seedTestData")]
        [Authorize]
        public async Task<IActionResult> SeedTestData([FromBody] SeedTestDataIntegrationEventsRequest request)
        {
            await _integrationsEventService.SeedTestData(request);
            return Ok();
        }
    }
}
