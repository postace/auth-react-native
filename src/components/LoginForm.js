import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Card, Button, CardSection } from './common';

export default class LoginForm extends Component {
  /*By default, text input will not have any width, height*/
  render() {
    return (
      <Card>
        <CardSection>
          <TextInput style={{"width": "100%", height: 20}}/>
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}