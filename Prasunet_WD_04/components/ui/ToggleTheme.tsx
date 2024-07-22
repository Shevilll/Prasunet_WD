import { useTheme } from "next-themes";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ToggleTheme = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div>
            <button
                className="px-4 text-sm rounded-md font-semibold dark:text-white text-black "
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
                {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
        </div>
    );
};

export default ToggleTheme;
