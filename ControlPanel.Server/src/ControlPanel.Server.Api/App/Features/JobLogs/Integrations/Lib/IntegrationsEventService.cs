using AutoMapper;
using Bogus;
using ControlPanel.Server.Api.App.Entities.Integrations;
using ControlPanel.Server.Api.App.Features.JobLogs.Integrations.Model;
using ControlPanel.Server.Api.App.Shared.Model;
using ControlPanel.Server.Api.App.Shared.Storage;
using Microsoft.EntityFrameworkCore;

namespace ControlPanel.Server.Api.App.Features.JobLogs.Integrations.Lib
{
    public class IntegrationsEventService : IIntegrationsEventService
    {
        private readonly AppDbContext _db;
        private readonly IMapper _mapper;

        public IntegrationsEventService(AppDbContext db, IMapper mapper)
        {
            _db = db;
            _mapper = mapper;
        }

        public async Task<List<IntegrationEventDto>> GetAllAsync()
        {
            var entities = await _db.IntegrationEvents.ToListAsync();
            return _mapper.Map<List<IntegrationEventDto>>(entities);
        }

        public async Task<PagedResponse<IntegrationEventDto>> GetAsync(int skip = 0, int take = 10)
        {
            // Валидация параметров
            // Ограничение максимального размера страницы - возвратить ошибку

            var totalCount = await _db.IntegrationEvents.CountAsync();
            var entities = await _db.IntegrationEvents
                .OrderBy(i => i.Id)
                .Skip(skip)
                .Take(take)
                .ToArrayAsync();

            var result = new PagedResponse<IntegrationEventDto>();
            result.Items = _mapper.Map<IntegrationEventDto[]>(entities);
            result.Total = totalCount;

            return result;
        }

        public async Task SeedTestData(SeedTestDataIntegrationEventsRequest request)
        {
            var _faker = new Faker<IntegrationEvent>()
                .RuleFor(e => e.Id, 0) // Id всегда 0
                .RuleFor(e => e.TypeIntegration, f => f.PickRandom(new[] { "Products", "Payments", "Orders" }))
                .RuleFor(e => e.Started, f => f.Date.RecentOffset(30).UtcDateTime)
                .RuleFor(e => e.Finished, (f, e) => e.Started.AddMinutes(f.Random.Double(1, 120)))
                .RuleFor(e => e.PeriodicTaskId, f => f.Random.Long(1, 3))
                .RuleFor(e => e.Success, f => f.Random.Bool(0.95f)) // 95% true, 5% false
                .RuleFor(e => e.TotalMilliseconds, (f, e) => (e.Finished - e.Started).TotalMilliseconds)
                .RuleFor(e => e.Message, (f, e) => e.Success ? f.Lorem.Sentence() : $"Error: {f.Lorem.Sentence()}");

            var entities = _faker.Generate(request.Count);

            await _db.IntegrationEvents.AddRangeAsync(entities);
            await _db.SaveChangesAsync();
        }
    }
}
