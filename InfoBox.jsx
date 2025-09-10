import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import "./InfoBox.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";


export default function InfoBox({ info }) {
  const INIT_IMG = "https://images.unsplash.com/photo-1597040663342-45b6af3d91a5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const Cold_url = "https://images.unsplash.com/photo-1480775661506-541bb9d526b6?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const Rain_Url = "https://images.unsplash.com/photo-1620385019253-b051a26048ce?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const Hot_URL = "https://images.unsplash.com/photo-1546274527-9327167dc1f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className='cardcontainer'>
      <div className="InfoBox">

        <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80 ? Rain_Url : info.temp > 15 ? Hot_URL : Cold_url}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{
                 info.humidity > 80 ?<ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/> }

            </Typography>
            <Typography variant="body2" component={"span"} color='text.secondary' >
              <p>Temperature={info.temp}&deg;C</p>
              <p>Humidity={info.humidity}</p>
              <p>Min-Temp={info.tempMin}&deg;C</p>
              <p>Max-Temp={info.tempMax}&deg;C</p>
              <p>The Whether can be described as <i>{info.weather}</i>
                and Feels like {info.feelslike}&deg;C</p>
            </Typography>
          </CardContent>

        </Card>
      </div>
    </div>
  );
}