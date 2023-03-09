import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import Nav from '../components/Nav';
import Carouselprof from '../components/Carouselprof';
import Bio from '../components/Bio';
import Profil from '../components/Profil';
import Footer from '../components/Footer';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Nav />
        <Carouselprof />
        <Bio />
        <Profil />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
