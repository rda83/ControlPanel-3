
using ControlPanel.Server.Api.App.Features.JobLogs.Integrations.Model;

namespace ControlPanel.Server.Api.App.Features.JobLogs.Integrations.Lib
{
    public interface IIntegrationsEventService
    {
        Task<List<IntegrationEventDto>> GetAllAsync();
        Task SeedTestData(SeedTestDataIntegrationEventsRequest request);
    }
}
