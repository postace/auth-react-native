import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Card, Button, CardSection } from './common';

export default class LoginForm extends Component {

  state = {
    text: ''
  };

  /*By default, text input will not have any width, height*/
  render() {
    return (
      <Card>
        <CardSection>
          <TextInput
            value={this.state.text}
            onChangeText={text => this.setState({text: text})}
            style={{ "width": "100%", height: 20 }} />
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