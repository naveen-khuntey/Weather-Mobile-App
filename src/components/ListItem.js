import React from "react";
import { View,StyleSheet,Text} from "react-native";
import {Feather} from '@expo/vector-icons';

export default function ListItem(props){
    const {dt_text, max,min,condition} = props;
    return (
        <View style={styles.item}>
            <Feather name="sun" size={50} color="white" />
            <Text style={styles.Date}>{dt_text}</Text>
            <Text style={styles.temp}>{max}</Text>
            <Text style={styles.temp}>{min}</Text>
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
        backgroundColor: 'pink',
        borderWidth: 2,
    },
    temp: {
        fontSize: 20,
        color: 'white',
    },
    Date: {
        fontSize: 15,
        color: 'white',
    },
    image: {
        width: '100%',
        height: '100%',
    }
});