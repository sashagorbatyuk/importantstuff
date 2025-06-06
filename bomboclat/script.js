const API_KEY = '42b9e2c1d3ec4f171c24098cdaddcebe';

document.getElementById('weather-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const city = document.getElementById('city-input').value;
    const resultContainer = document.getElementById('weather-result');
    const errorMessage = document.getElementById('error-message');

    resultContainer.classList.add('hidden');
    errorMessage.classList.add('hidden');

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ua`);
        if (!response.ok) throw new Error('Місто не знайдено');
        const data = await response.json();

        document.getElementById('city-name').textContent = `Місто: ${data.name}`;
        document.getElementById('temperature').textContent = `Температура: ${data.main.temp}°C`;
        document.getElementById('weather-description').textContent = `Опис: ${data.weather[0].description}`;
        document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        resultContainer.classList.remove('hidden');
    } catch (error) {
        errorMessage.textContent = error.message;
        errorMessage.classList.remove('hidden');
    }
});
