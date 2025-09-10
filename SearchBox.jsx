import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';


export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "ca70fb2304533fb00130d78ac939e1c4";

    let getWhetherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        }
        catch (err) {
            throw err;
        }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWhetherInfo();
            updateInfo(newInfo);
        }

        catch (err) {
            setError(true);
        }
    };

    return (
        <div class="Whether">

            <form onSubmit={handleSubmit}>
                <TextField onChange={handleChange} id="City" label="City Name" variant="outlined" value={city} required />
                <br></br>
                <Button className='btn' variant="text" type="submit"> Search</Button>
                {error && <p style={{color:"yellow" ,backgroundColor:"green"}}>No Such Place Exists!</p>}
            </form>
        </div>

    );
}