import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleClick(event) {
    var apiBaseUrl = "http://localhost:8080/api/";
    var self = this;
    var payload = {
      "email": this.state.username,
      "password": this.state.password
    }

    axios.post(apiBaseUrl + 'login', payload)
    .then(function(response) {
      console.log(response);
      if (response.data.code === 200) {
        console.log('Login successful');
      } else if (response.data.code === 204) {
        console.log("Username doesnot match");
        alert("username password donot match");
      } else {
        console.log("Username does not exists");
        alert("Username does not exists")
      }
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="Login" />
            <TextField
              hintText="Enter your login"
              floatingLabelText="Login"
              style={style}
              onChange={ (event, newValue) => this.setState({ username: newValue }) }
            />
            <br />
            <TextField
              hintText="Enter your password"
              floatingLabelText="Password"
              style={style}
              onChange={ (event, newValue) => this.setState({ password: newValue }) }
            />
            <br />
            <RaisedButton
              label="Submit"
              primary={ true }
              style={ style }
              onClick={ event => this.handleClick(event) }
            />
            <br />
            <br />
            <h3 style={ style }><Link to="/register">Not Registred? Register!</Link></h3>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
 margin: 15,
};
