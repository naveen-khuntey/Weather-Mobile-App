import React from "react";
import { View,StyleSheet,Text} from "react-native";
import {Feather} from '@expo/vector-icons';
import { weatherType } from "../Utils/WeatherType";
import moment from "moment";
export default function ListItem(props){
    const {dt_text, max,min,condition} = props;
    return (
        <View style={styles.item}>
            <Feather name={weatherType[condition]?.icon} size={50} color={'white'} />
            <View style={styles.dateTimeWrapper}>
                <Text style={styles.Date}>{moment(dt_text).format('dddd')}</Text>
                <Text style={styles.Date}>{moment(dt_text).format('h:mm:ss a')}</Text>
            </View>
            <Text style={styles.temp}>{`${Math.round(min)}°C / ${Math.round(max)}°C`}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    item : {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'grey',
        borderWidth: 2,
        gap:5
    },
    temp: {
        fontSize: 15,
        color: 'white',
    },
    Date: {
        fontSize: 15,
        color: 'white',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    dateTimeWrapper :{
        flexDirection:'column'
    }
});