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
        public async Task<IActionResult> GetAll([FromQuery] int skip = 1,
            [FromQuery] int take = 20)
        {
            // TODO:
            // - пагинация
            // - сортировка
            // - фильтрация
            // - обрезка (только нужные данные)

            var result = await _integrationsEventService.GetAllAsync();

            //return NotFound();
            return Ok(result.OrderBy(i => i.Id).Skip(skip).Take(take));
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
