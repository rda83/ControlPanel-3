
using ControlPanel.Server.Api.App.Features.JobLogs.Integrations.Model;
using ControlPanel.Server.Api.App.Shared.Model;
using Microsoft.AspNetCore.Mvc;

namespace ControlPanel.Server.Api.App.Features.JobLogs.Integrations.Lib
{
    public interface IIntegrationsEventService
    {
        Task<PagedResponse<IntegrationEventDto>> GetAsync(int skip = 0, int take = 10);
        Task SeedTestData(SeedTestDataIntegrationEventsRequest request);
    }
}
