import React, {useState, useEffect} from "react";
import * as Location from 'expo-location';
const apikey = process.env.EXPO_PUBLIC_API_KEY;

export default function useGetWeather() {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [weather, setWeather] = useState(null);
  const [lat, setLat] = useState(null);
  const [long,setLong] = useState(null);
  const fetchWeatherdata = async () => {
    try{
      if(!lat || !long || !apikey){
        throw new Error("Location not found");
      }
      const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apikey}&units=metric`);
      const data = await res.json();
      console.log("data : ",data);
      setWeather(data);
    }
    catch(e){
      console.log(e);
    }
    finally{
      setIsLoading(false);
    }
  }
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLat(location.coords.latitude);
      setLong(location.coords.longitude);
      setIsLoading(false);
      await fetchWeatherdata();
    })();
  }, [lat,long]);
  return [isLoading,errorMsg,weather];
}