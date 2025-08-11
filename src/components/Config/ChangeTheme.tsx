import { useEffect, useState } from "react";
import { LocalStorageKeys } from "../../constants/constants";

export default function ChangeTheme() {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem(LocalStorageKeys.Theme);
        if (storedTheme) return storedTheme;
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return "dark";
        }
        return "light";
    })

    useEffect(() => {
        if (theme === "dark") {
            return document.querySelector("html")?.classList.add("dark");
        } else {
            return document.querySelector("html")?.classList.remove("dark");
        }
    }, [theme])
    window.localStorage.setItem(LocalStorageKeys.Theme, theme)
    const handleChange = (e: any) => {
        e.stopPropagation();
        setTheme(prevtheme => prevtheme === "dark" ? "light" : "dark")
    }
    return (
        <li className="w-full text-left p-1 rounded mt-1">
            <h6 className="font-bold">Theme Config</h6>
            <button onClick={handleChange} className="dark:bg-blue-500 bg-blue-400 hover:bg-blue-700 dark:text-white text-gray-900 font-bold py-1 px-2 rounded my-4 cursor-pointer">
                <i className={theme === "dark" ? 'bx bx-moon' : "bx bx-sun"} ></i>
                &nbsp;
                {theme === "dark" ? "Dark" : "Light"} Theme
            </button>
        </li>
    );
};
