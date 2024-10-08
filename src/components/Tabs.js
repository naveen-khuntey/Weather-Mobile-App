import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";
import { Feather } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
export default function Tabs({weather}) {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "black",
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "lightblue",
                    borderTopColor: "transparent",
                },
            }}
        >
            <Tab.Screen 
                name="Current Weather" 
                options={{
                    tabBarIcon: ({ focused }) => (
                    <Feather name="droplet" size={25} color={focused ? "tomato" : "black"} />
                    ),
                }}
            >
                {() => <CurrentWeather weatherData={weather.list[0]}/>}
            </Tab.Screen>
            <Tab.Screen 
                name="Upcoming Weather" 
                options={{
                    tabBarIcon: ({ focused }) => (
                    <Feather name="clock" size={25} color={focused ? "tomato" : "black"} />
                    ),
                }}
            >
                {()=><UpcomingWeather weatherData={weather.list} />}
            </Tab.Screen>
            <Tab.Screen 
                name="City" 
                options={{
                    tabBarIcon: ({ focused }) => (
                    <Feather name="home" size={25} color={focused ? "tomato" : "black"} />
                    ),
                }}
            >
               {()=><City weatherData={weather.city}/>} 
            </Tab.Screen>
        </Tab.Navigator>
    )
}