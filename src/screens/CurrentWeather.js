import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, SafeAreaView } from 'react-native';
import {Feather} from '@expo/vector-icons';
import RowText from '../components/RowText';
export default function CurrentWeather() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <RowText
          messageOne="High: 8"
          messageTwo="Low: 6"
          containerStyles={styles.highLowWrapper}
          messageOneStyles={styles.highLow}
          messageTwoStyles={styles.highLow}
        />
      </View>
      <RowText
        messageOne="Its Sunny"
        messageTwo="Its perfect t-shirt weather"
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
