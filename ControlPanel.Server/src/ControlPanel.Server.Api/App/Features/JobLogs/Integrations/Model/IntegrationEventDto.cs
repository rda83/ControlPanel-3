namespace ControlPanel.Server.Api.App.Features.JobLogs.Integrations.Model
{
    public class IntegrationEventDto
    {
        public long Id { get; set; }
        public string TypeIntegration { get; set; }
        public DateTime Started { get; set; }
        public DateTime Finished { get; set; }
        public long PeriodicTaskId { get; set; }
        public bool Success { get; set; }
        public double TotalMilliseconds { get; set; }
        public string Message { get; set; }
    }
}
