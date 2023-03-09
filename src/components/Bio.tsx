import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';

export default class Bio extends Component {
  render() {
    return (
      <View>
        <Text style={styles.tx1}>
          fatihalfaruq
          <Image
            style={styles.cen}
            source={require('../assets/icon/correct.png')}
          />
        </Text>
        <Text style={styles.tx2}>
          <Image
            style={styles.cen}
            source={require('../assets/icon/code.png')}
          />
          Mobile Developer
        </Text>
        <Text style={styles.tx3}>*React-Native*</Text>
        <Text style={styles.tx4}>--Typescript--</Text>
        <Text style={styles.tx5}>
          <Image
            style={styles.cen}
            source={require('../assets/icon/chicken-rice.png')}
          />
          Bekasi-Jogja
        </Text>
        <Text style={styles.tx6}>allfatih.com</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tx1: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: 15,
  },
  cen: {width: 20, height: 20},
  tx2: {
    fontSize: 20,
    marginLeft: 15,
    color: 'black',
    marginTop: 5,
  },
  tx3: {
    fontSize: 20,
    marginLeft: 15,
    color: 'black',
  },
  tx4: {
    fontSize: 20,
    marginLeft: 15,
    color: 'black',
  },
  tx5: {
    fontSize: 20,
    marginLeft: 15,
    color: 'black',
  },
  tx6: {
    fontSize: 20,
    marginLeft: 15,
    color: 'blue',
  },
});
