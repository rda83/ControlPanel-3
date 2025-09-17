using AutoMapper;
using ControlPanel.Server.Api.App.Entities.Integrations;

namespace ControlPanel.Server.Api.App.Features.JobLogs.Integrations.Model
{
    public class IntegrationEventProfile : Profile
    {
        public IntegrationEventProfile()
        {
            CreateMap<IntegrationEventDto, IntegrationEvent>();
            CreateMap<IntegrationEvent, IntegrationEventDto>();
        }
    }
}
