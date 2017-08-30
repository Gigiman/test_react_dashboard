import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import { Redirect } from 'react-router';

import Login from './login_form';

export default class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name:   '',
      last_name:    '',
      email:        '',
      password:     '',
      passwordConf: ''
    }
  }

  handleClick(event) {
    var apiBaseUrl = "http://localhost:8080/api/"

    var self = this;
    var payload = {
      "first_name": this.state.first_name,
      "last_name":  this.state.last_name,
      "email":      this.state.email,
      "password":   this.state.password,
      passwordConf: this.state.passwordConf
    }

    axios.post(apiBaseUrl + 'signup', payload)
    .then(function(response) {
      console.log(payload);
      console.log(response);
      if (response.data.code === 200) {

      }
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="Registration" />
            <TextField
              hintText="Enter your First Name"
              floatingLabelText="First Name"
              style={style}
              onChange={ (event, newValue) => {
                this.setState({ first_name: newValue })
              } }
            />
            <br />
            <TextField
              hintText="Enter your Last Name"
              floatingLabelText="Last Name"
              style={style}
              onChange={ (event, newValue) => {
                this.setState({ last_name: newValue })
              } }
            />
            <br />
            <TextField
              type="email"
              hintText="Enter your Email"
              floatingLabelText="Email"
              style={style}
              onChange={ (event, newValue) => {
                this.setState({ email: newValue })
              } }
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              style={style}
              onChange={ (event, newValue) => {
                this.setState({ password: newValue })
              } }
            />
            <br />
            <TextField
              type="passwordConf"
              hintText="Repeat your Password"
              floatingLabelText="Password"
              style={style}
              onChange={ (event, newValue) => {
                this.setState({ passwordConf: newValue })
              } }
            />
            <br />
            <RaisedButton label="Submit" primary={true} style={style} onClick={ event => {this.handleClick(event)} } />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
  margin: 15,
};
