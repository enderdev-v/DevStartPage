import WeatherWidget from "./Weather";

export default function Welcome() {
    const user = "enderdev"
    return (
        <div className="flex flex-col items-center justify-center w-full h-3 select-none ">
            <h1 className="text-lg font-bold text-center flex items-center gap-2 text-gray-950 dark:text-white dark:bg-gray-800/50 bg-gray-300/50  p-3 rounded-lg"> 
                <WeatherWidget city="Guadalajara"></WeatherWidget>
                &nbsp;
                Welcome {user}
            </h1>
        </div>
    );
};
