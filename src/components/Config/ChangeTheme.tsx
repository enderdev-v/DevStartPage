import { useEffect, useState } from "react";
import { LocalStorageKeys } from "../../constants/constants";
import ConfigButton from "./ButtonConfig";

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
            <h6 className="text-lg font-bold">Theme Config</h6>
            <ConfigButton props={{ onClick: handleChange }}>
                <i className={theme === "dark" ? 'bx bx-moon' : "bx bx-sun"} ></i>
                &nbsp;
                {theme === "dark" ? "Dark" : "Light"} Theme
            </ConfigButton>
        </li>
    );
};
