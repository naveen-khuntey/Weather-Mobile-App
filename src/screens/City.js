import React from "react";
import { View, SafeAreaView,StyleSheet,Text, ImageBackground } from "react-native";
import IconText from "../components/IconText";
export default function City() {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../assets/city-bg.jpg')}
                style={styles.imageLayout}
            >
                <Text style={[styles.cityText,styles.cityName]}>City</Text>
                <Text style={[styles.cityText,styles.countryName]}>Country</Text>
                <View style={[styles.populationWrapper,styles.rowLayout]}>
                    <IconText iconName="user" 
                        iconColour="red" 
                        bodyText="8000" 
                        bodyTextStyles={styles.population}
                    />
                </View>
                <View style={[styles.riseSetWrapper,styles.rowLayout]}>
                    <IconText iconName="sunrise" 
                        iconColour="white" 
                        bodyText="07:08:28AM" 
                        bodyTextStyles={styles.riseSetText}
                    />
                    <IconText iconName="sunset" 
                        iconColour="white" 
                        bodyText="05:28:28PM" 
                        bodyTextStyles={styles.riseSetText}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // paddingTop:StatusBar.currentHeight
    },
    imageLayout:{
        flex: 1,
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        color: 'black',
        fontSize: 30,
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30,
    },
    population: {
        color: 'red',
        fontSize: 25,
        marginLeft: 7.5,
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        marginTop: 30,
    },
    riseSetText: {
        color: 'white',
        fontSize: 20,
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center',
    },  
});