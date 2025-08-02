import { useState, useEffect } from 'react';

interface WeatherData {
  current?: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

export default function WeatherWidget({ city }: { city: string }) {
    const apiKey = import.meta.env.VITE_API_KEY;
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(
                    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
                );
                if (!response.ok) {
                    throw new Error('Weather data not available');
                }
                const data = await response.json();
                setWeatherData(data);
                setError(null);
            } catch (err) {
                setError('Error fetching weather data');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [city, apiKey]);

    if (loading) return <span>Loading...</span>;
    if (error) return <span>{error}</span>;
    if (!weatherData?.current) return <span>No weather data</span>;

    return (
        <span className="flex items-center gap-2">
            <img 
                src="vite.svg"
                alt="xd"
                height={18} 
                width={18} 
            />
            {weatherData.current.temp_c}°C
        </span>
    );
}
