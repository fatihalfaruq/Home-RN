import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';

export default class Carousel2 extends Component {
  render() {
    return (
      <View style={styles.concom1}>
        <View style={styles.concom}>
          <Image
            style={styles.Carimg}
            source={require('../assets/image/e.png')}
          />
        </View>
        <Text style={styles.texcar}>Apple</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Carimg: {
    width: 80,
    height: 80,
  },
  texcar: {
    fontSize: 20,
    color: 'blue',
  },
  concom: {
    backgroundColor: 'blue',
    borderRadius: 80,
    borderColor: 'green',
    borderWidth: 2,
  },
  concom1: {
    alignItems: 'center',
    padding: 17,
  },
});
