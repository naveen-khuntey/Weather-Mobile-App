import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, SafeAreaView } from 'react-native';
import {Feather} from '@expo/vector-icons';
import RowText from '../components/RowText';
import { weatherType } from '../Utils/WeatherType';
export default function CurrentWeather({weatherData}) {
  console.log("weatherData : ",weatherData);
  const {
    main : {temp, feels_like, temp_max, temp_min},
    weather
  } = weatherData;
  const weatherCondition = weather[0]?.main;
  return (
    <SafeAreaView style={[styles.wrapper,{backgroundColor: weatherType[weatherCondition].backgroundColor}]}>
      <View style={styles.container}>
        <Feather name={weatherType[weatherCondition].icon} size={100} color="white" />
        <Text style={styles.temp}>{`${temp}°C`}</Text>
        <Text style={styles.feels}>{`Feels like ${feels_like}°C`}</Text>
        <RowText
          messageOne={`High: ${temp_max}°C`}
          messageTwo={`Low: ${temp_min}°C`}
          containerStyles={styles.highLowWrapper}
          messageOneStyles={styles.highLow}
          messageTwoStyles={styles.highLow}
        />
      </View>
      <RowText
        messageOne={weather[0]?.description}
        messageTwo={weatherType[weatherCondition].message}
        containerStyles={styles.bodyWrapper}
        messageOneStyles={styles.descript}
        messageTwoStyles={styles.message}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper:{
    flex: 1,
    backgroundColor: 'pink',
  },
  temp :{
    color: 'black',
    fontSize: 48
  },
  feels : {
    color: 'black',
    fontSize: 30
  },
  highLow : {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper : {
    flexDirection: 'row',
    gap:10,
  },
  bodyWrapper:{
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft:25,
    marginBottom: 48,
  },
  descript : {
    fontSize:48,
  },
  message : {
    fontSize: 30,
  }
});
