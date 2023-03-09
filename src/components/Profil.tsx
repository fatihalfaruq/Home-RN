import {Text, StyleSheet, View, ScrollView} from 'react-native';
import React, {Component} from 'react';
import Carousel from './Carousel';
import Carousel2 from './Carousel2';

export default class Profil extends Component {
  render() {
    return (
      <View>
        <ScrollView horizontal>
          <Carousel />
          <Carousel2 />
          <Carousel />
          <Carousel2 />
          <Carousel />
          <Carousel2 />
          <Carousel />
          <Carousel2 />
          <Carousel />
          <Carousel2 />
          <Carousel />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
