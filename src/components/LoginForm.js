import React, { Component } from 'react';
import { Card, Button, CardSection, Input } from './common';

export default class LoginForm extends Component {

  state = {
    text: ''
  };

  /*By default, text input will not have any width, height*/
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.text}
            onChangeText={text => this.setState({text: text})}
          />
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