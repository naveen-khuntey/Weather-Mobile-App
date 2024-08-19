import React, {useState, useEffect} from "react";
import {View, StatusBar,StyleSheet,SafeAreaView } from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import { ActivityIndicator } from "react-native";
import useGetWeather from "./src/hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItem";

export default function App() {
  const [isLoading,errorMsg,weather] = useGetWeather();
  
  if(weather && weather.list && !isLoading){
    return (
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <Tabs weather={weather}/>
        </SafeAreaView>
      </NavigationContainer>
    );
  }
  return (
    <View style={styles.loader}>
      {errorMsg ? <ErrorItem /> : <ActivityIndicator size="large" color="#0000ff" />}
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop:StatusBar.currentHeight
    },
    loader : {
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }
});

