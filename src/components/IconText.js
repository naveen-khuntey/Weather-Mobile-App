import React from "react";
import { View, SafeAreaView, StatusBar,StyleSheet,Text, ImageBackground } from "react-native";
import {Feather} from '@expo/vector-icons';


export default function IconText(props) {
    const { iconName, iconColour, bodyText,bodyTextStyles } = props;
    return (
        <View style={styles.theme}>
            <Feather name={iconName} size={50} color={iconColour} />
            <Text style={[styles.textTheme,bodyTextStyles]}>{bodyText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textTheme:{
        fontWeight: 'bold',
    },
    theme: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center'
    },
});