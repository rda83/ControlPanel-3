namespace ControlPanel.Server.Api.App.Shared.Model
{
    public class PagedResponse<T>
    {
        public T[] Items { get; set; } = [];
        public long Total { get; set; }
    }
}
