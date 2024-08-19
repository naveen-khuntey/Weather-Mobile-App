import React from "react";
import { SafeAreaView,StyleSheet, FlatList,ImageBackground } from "react-native";
import ListItem from "../components/ListItem";

const renderItem = ({item})=>{
    return (
        <ListItem condition={item.weather[0]?.main} 
            dt_text={item?.dt_txt}
            min={item?.main.temp_min} 
            max = {item?.main.temp_max}
        />
    )
}
export default function UpcomingWeather({weatherData}) {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground 
                source={require('../../assets/upcoming-weather-bg.jpg')} 
                style={styles.image}
            >       
            <FlatList
                data={weatherData}
                renderItem={renderItem}
                keyExtractor={(item)=>item?.dt_txt}
            />
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   paddingTop:StatusBar. currentHeight,
        // backgroundColor: '#6c246f',
    },
    image: {
        width: '100%',
        height: '100%',
    }
});