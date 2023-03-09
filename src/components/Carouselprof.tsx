import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';

export default class Carouselprof extends Component {
  render() {
    return (
      <View style={styles.concar}>
        <View style={styles.conmg}>
          <Image
            style={styles.Carmg}
            source={require('../assets/image/skull.png')}
          />
        </View>
        <View>
          <Text style={styles.tx1}>
            fatihalfaruq
            <Image
              style={styles.cen}
              source={require('../assets/icon/correct.png')}
            />
          </Text>
          <View style={styles.contom}>
            <Text style={styles.tx2}>Edit Profil</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Carmg: {
    width: 100,
    height: 100,
  },
  conmg: {
    backgroundColor: 'black',
    width: 100,
    borderRadius: 60,
    borderColor: 'red',
    borderWidth: 2,
  },
  concar: {
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 10,
    flexDirection: 'row',
  },
  tx1: {fontSize: 30, color: 'black', marginLeft: 30},
  cen: {width: 20, height: 20},
  tx2: {fontSize: 15, color: 'black', fontWeight: 'bold'},
  contom: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    marginLeft: 30,
    height: 35,
    width: 270,
    marginTop: 10,
  },
});
