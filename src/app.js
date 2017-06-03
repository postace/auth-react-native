import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';

export default class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyD4cKbv-5WLXkovlL9er9KYyc5wKQsePxU",
      authDomain: "auth-react-native-86837.firebaseapp.com",
      databaseURL: "https://auth-react-native-86837.firebaseio.com",
      projectId: "auth-react-native-86837",
      storageBucket: "auth-react-native-86837.appspot.com",
      messagingSenderId: "947417436484"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An awesome app</Text>
      </View>
    );
  }
}