import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
//import * as Animatable from 'react-native-animatable';

export default function TeamScreen() {
  return (
  <View style={styles.container}>
    <View style={styles.contTitle}>
        {/* <Animatable.Image
          animation="rotate"
          easing="ease-out"
          iterationCount="infinite"
          source={require('../../assets/icons/team.png')}>
          {props.image}
        </Animatable.Image> */}
        <Image style={styles.icon} source={require('../../assets/icons/team.png')} />
        <Text style={styles.title}>Work Team</Text>
        <View style={styles.line} />
    </View>
    <View style={styles.contTeam}>
      <View style={styles.item}>
        <Image style={styles.team} source={require('../../assets/images/Sofia.png')} />
        <Text style={styles.name}>Waira Sofia Ocampo</Text>
      </View>
      <View style={styles.item}>
        <Image style={styles.team} source={require('../../assets/images/Alejandra.png')} />
        <Text style={styles.name}>Alejandra Bolívar</Text>
      </View>
      <View style={styles.item}>
        <Image style={styles.team} source={require('../../assets/images/Yeison.png')} />
        <Text style={styles.name}>Yeison Zaraza</Text>
      </View>
      <View style={styles.item}>
        <Image style={styles.team} source={require('../../assets/images/Santiago.png')} />
        <Text style={styles.name}>Santiago Tavera Gómez</Text>
      </View> 
    </View>
    <View style={styles.contAttrib}>
      <View style={styles.line} />
      <Text style={styles.title}>Media Attribute</Text>
      <View style={styles.line} />
      <Text style={styles.name}>The icons used were obtained from:</Text>
       <Text style={styles.name}>https://www.flaticon.com</Text>
    </View>
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
  contTeam: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 50,
  },
  item:{
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 50,
    alignItems: 'center',
  },
  team:{
    width: 220,
    height: 220,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#59727e',
  },
  name:{
    fontSize: 14,
    fontFamily: 'Arial',
  },
  contAttrib: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0,
  }
});