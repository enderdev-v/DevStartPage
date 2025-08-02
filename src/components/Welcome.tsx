export default function Welcome() {
    const user = "enderdev"
    return (
        <div className="flex flex-col items-center justify-center w-full h-full select-none">
            <h1 className="text-2xl font-bold text-center mb-4 flex items-center gap-2 text-white"> 
                <span className="flex items-center gap-2 bg-gray-800 p-4 rounded-full">
                <img src="/vite.svg" alt="Welcome" />
                28°C                
                </span>
                Welcome {user}
            </h1>
        </div>
    );
};
