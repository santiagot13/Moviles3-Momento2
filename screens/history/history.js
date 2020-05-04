import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
//import * as Animatable from 'react-native-animatable';

export default function historyScreen() {
  return (
    <View style={styles.container}>
         <View style={styles.contTitle}>
        {/* <Animatable.Image
          animation="rotate"
          easing="ease-out"
          iterationCount="infinite"
          source={require('../../assets/icons/calendar.png')}>
          {props.image}
        </Animatable.Image> */}
        <Image style={styles.icon} source={require('../../assets/icons/test.png')} />
        <Text style={styles.title}>History Date</Text>
        <View style={styles.line} />
      </View>
      <Text>Welcome to  History Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#d4cfcc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contTitle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon:{
    width: 40,
    height: 40,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Arial',
  },
   line: {
    borderBottomWidth: 1,
    flex: 1,
    marginTop: 3,
    borderColor: 'red',
  },
});