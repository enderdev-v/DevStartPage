import React, { useState } from "react";

interface WeatherConfigProps {
  onWeatherSubmit: (location: string) => void;
}

export default function WeatherConfig({ onWeatherSubmit }: WeatherConfigProps) {
  const [location, setLocation] = useState("");

  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };

  const handleGetLocation = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        );
        const data = await res.json();
        const city = data.address.city || data.address.town || data.address.village || "";
        const country = data.address.country || "";
        const fullLocation = `${city}, ${country}`;
        setLocation(fullLocation);
      });
    } else {
      alert("Geolocation no soportada en este navegador.");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (location.trim()) {
      onWeatherSubmit(location);
      setLocation("");
    }
  };

  return (
    <li className="w-full text-left p-1 rounded mt-1">
      <h6 className="font-bold">Weather Config</h6>
      <form className="flex flex-col m-3" onSubmit={handleSubmit}>
        <label className="text-lg">Find Location</label>
        <input
          type="text"
          name="city"
          placeholder="Example: Paris, Madrid, Buenos Aires"
          className="mb-2 p-2 rounded"
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onClick={handleInputClick}
        />
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded my-4"
          onClick={handleGetLocation}
        >
          get from location
        </button>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
        >
          Submit
        </button>
      </form>
    </li>
  );
}

