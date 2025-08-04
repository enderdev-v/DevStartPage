import { useState } from "react";
import ChangeTheme from "./ChangeTheme";
import WeatherConfig from "./WeatherConfig";
import UserConfig from "./userConfig";

interface ConfigProps {
  Submit: (e: any) => void;
  onWeatherSubmit: (location: string) => void;
}

export default function Config({ Submit, onWeatherSubmit }: ConfigProps) {
  // Theme state
  const [state, setState] = useState(true);

  const DropdownClass = state ? "hidden" : "block";

  return (
    <div className="relative left-0.5 top-0 w-60 rounded-2xl m-4 select-none">
      <div
        className="flex items-center dark:bg-gray-900 bg-gray-300 dark:text-white text-gray-900  px-3 py-3 rounded-lg cursor-pointer dark:hover:outline-gray-300 hover:outline-gray-800 hover:outline-1"
        onClick={() => setState(!state)}
      >
        <span className="text-lg font-bold">
          <i className="bx bxs-cog"></i>&nbsp;Configuration
        </span>
        <ul
          className={`absolute top-full left-0 mt-1 dark:bg-gray-900 dark:text-white text-gray-800 bg-gray-300 rounded-lg p-2 w-full ${DropdownClass} z-50 shadow-lg`}
        >
          <ChangeTheme />
          <WeatherConfig onWeatherSubmit={onWeatherSubmit} />
          <UserConfig onSubmit={Submit} />
        </ul>
      </div>
    </div>
  );
}
