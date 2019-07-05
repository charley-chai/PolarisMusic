import React, { Component } from 'react';
import { Icon, Button, Form, Input, Checkbox } from 'antd';
import JQ from "jquery";

import '../styles/home.css';
import '../styles/account.css';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        name: 'Charley Chai',
        primuium: true,
        uid: 123456,
        avatar: 'hh',
      },
      phone: '',
      password: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({
          phone: values.phone,
          password: values.password
        })
        var url = `http://localhost:4000/login/cellphone?phone=${values.phone}&password=${values.password}`;
        this.login(url);
      }
    });
  };

  login = (url) => {
    JQ.ajax({
      url: url,
      xhrFields: {
        withCredentials: true
      },
      success: function (data) {
        console.log(data)
        alert("Login successfully!");
        return true;
      },
      error: function (err) {
        console.log(err)
        alert("Phone number or password error! Try again");
        return false;
      }
    }).then(() => {
      this.props.onSignIn();
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="main-view">
        <div className="head-view">
          <div className="search">
            <input className="inputs" placeholder="Search" />
            <Icon className="iicon" type="search" />
          </div>
          <p className="page-name">Account</p>
          <div style={{ textAlign: "left" }}>
            <span style={{ margin: 20, height: 32 }} />
          </div>
        </div>
        <div className="body-view" style={{ color: 'white', paddingTop: 20, textAlign: "center" }}>
              <div className="sign-card">
                <p style={{ color: '#09A97D', fontSize: 18, fontWeight: 'bold', margin: "15px 20px", paddingTop: 15 }}>Sign In</p>
                <div className="part-divide" style={{ margin: "0 20px" }} />
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator('phone', {
                  rules: [{ required: true, message: 'Please input your phone number!' }],
                })(
                  <Input style={{ borderRadius: 100 }}
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Phone number"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your password!' }],
                })(
                  <Input style={{ borderRadius: 100 }}
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(<Checkbox style={{ color: "#09A97D" }} >Remember me</Checkbox>)}
                <a className="login-form-forgot" style={{ color: "#09A97D" }}  href="www.google.com">
                  Forgot password
                </a>
                <Button ghost={true} style={{ borderRadius: 100, width: "100%" }} 
                  htmlType="submit" className="login-form-button">
                  Log in
                </Button>
                <a href="www.google.com" style={{ color: "#09A97D" }}>Or register now!</a>
              </Form.Item>
            </Form>
          </div>
          <div style={{ height: 20 }} />
        </div>
      </div>
    )
  }
}

const SigninForm = Form.create({ name: 'normal_login' })(Signin);

export default SigninForm;