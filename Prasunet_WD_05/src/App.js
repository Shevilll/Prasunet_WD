import { useState } from "react";
import { Getdata } from "./data";

export default function App() {
    const API_KEY = process.env.REACT_APP_API_KEY;

    const [search, setSearch] = useState("India");
    const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${search}&aqi=yes`;
    return (
        <>
            <div id="container">
                <input
                    type="search"
                    onChange={(e) =>
                        setTimeout(() => setSearch(e.target.value), 600)
                    }
                    defaultValue={search}
                    placeholder="Enter Location"
                />
            </div>

            <Getdata URL={URL} />
            <p>SheviL©</p>
        </>
    );
}
