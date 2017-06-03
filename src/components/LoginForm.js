import React, { Component } from 'react';
import { Card, Button, CardSection, Input } from './common';

export default class LoginForm extends Component {

  state = {
    email: ''
  };

  /*By default, text input will not have any width, height*/
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
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