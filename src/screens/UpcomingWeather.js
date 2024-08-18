import React from "react";
import { SafeAreaView, StatusBar,StyleSheet,Text, FlatList,ImageBackground } from "react-native";
import ListItem from "../components/ListItem";

const Data = [
    {
        dt_text: '2024-08-26 12:10:00',
        main : {
            temp_max: 8.55,
            temp_min: 6.55,
        },
        weather : [
            {
                main: 'Cloudy',
            }
        ]
    },
    {
        dt_text: '2023-08-26 12:01:00',
        main : {
            temp_max: 8.55,
            temp_min: 6.55,
        },
        weather : [
            {
                main: 'clear',
            }
        ]
    },
    {
        dt_text: '2022-08-26 12:32:00',
        main : {
            temp_max: 8.55,
            temp_min: 6.55,
        },
        weather : [
            {
                main: 'rain',
            }
        ]
    }
]

const renderItem = ({item})=>{
    return (
        <ListItem condition={item.weather[0].main} 
            dt_text={item.dt_text} 
            min={item.main.temp_min} 
            max = {item.main.temp_max}
        />
    )
}
export default function UpcomingWeather() {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground 
                source={require('../../assets/upcoming-weather-bg.jpg')} 
                style={styles.image}
            >       
            <Text>Upcoming Weather</Text>
            <FlatList
                data={Data}
                renderItem={renderItem}
                keyExtractor={(item)=>item.dt_text}
            />
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop:StatusBar. currentHeight,
        backgroundColor: '#6c246f',
    },
    image: {
        width: '100%',
        height: '100%',
    }
});