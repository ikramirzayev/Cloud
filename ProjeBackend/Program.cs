var builder = WebApplication.CreateBuilder(args);

// 1. CORS Politikasını Tanımla
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReact",
        policy =>
        {
            policy.WithOrigins("http://benim-bulut-projem-2026.s3-website.eu-north-1.amazonaws.com") 
                  .AllowAnyMethod()
                  .AllowAnyHeader();
        });
});

builder.Services.AddOpenApi();

var app = builder.Build();

// 2. CORS'u Aktif Et (Mutlaka MapGet'ten önce olmalı)
app.UseCors("AllowReact");

// KRİTİK NOT: Eğer sunucuda SSL sertifikan yoksa (ki şu an IP kullanıyorsun), 
// aşağıdaki satırı yorum satırı yapmalısın. Yoksa tarayıcı isteği engeller.
// app.UseHttpsRedirection(); 

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

app.MapGet("/weatherforecast", () =>
{
    var forecast = Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast
        (
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        ))
        .ToArray();
    return forecast;
})
.WithName("GetWeatherForecast");

app.Run();

record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}