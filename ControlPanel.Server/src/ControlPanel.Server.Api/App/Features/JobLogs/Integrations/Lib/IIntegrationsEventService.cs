
using ControlPanel.Server.Api.App.Features.JobLogs.Integrations.Model;

namespace ControlPanel.Server.Api.App.Features.JobLogs.Integrations.Lib
{
    public interface IIntegrationsEventService
    {
        Task SeedTestData(SeedTestDataRequest request);
    }
}
