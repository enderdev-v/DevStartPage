import WeatherWidget from "./Weather";

interface WelcomeProps {
  children: React.ReactNode;
  city: string;
}

export default function Welcome({ children, city }: WelcomeProps) {
    
    return (
        <div className="flex flex-col items-center justify-center w-full h-3 select-none max-md:h-2 max-md:mt-4">
            <h1 className="text-lg font-bold text-center flex items-center gap-2 text-gray-950 dark:text-white dark:bg-gray-800/50 bg-gray-300/50  p-3 rounded-lg"> 
                <WeatherWidget city={city}></WeatherWidget>
                &nbsp;
                Welcome {children}
            </h1>
        </div>
    );
};
