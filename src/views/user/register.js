import React, { Component } from "react";
import { Row, Card, CardTitle, Form, Label, Input, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser,loginUser } from "../../redux/actions";

import IntlMessages from "../../helpers/IntlMessages";
import { Colxx } from "../../components/common/CustomBootstrap";
import api from "../../service/api/api"
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // email: "user@gmail.com",
      // password: "password",
      // name: "user",
      // organization:'test'
      email: "admin@sharering.network",
      password: "hf237agnAFags",
      name: "user",
      organization:'test'
    };
  }
  componentDidMount() {

  }
  onUserRegister() {
    if (this.state.email !== "" && this.state.password !== "") {
      let values={email:this.state.email,password:this.state.password}
      this.onUserLogin(values)
      // this.props.history.push("/");
    }
  }
  onUserLogin = (values) => {
    this.props.loginUser(
      {
        email: "admin@sharering.network",
        password: "hf237agnAFags"}, 
        this.props.history
    );
    // api.login(values.email, values.password, async (err, res) => {
    //   if(!err){
    //     this.props.loginUser(values, this.props.history);
    //     localStorage[`auth-token`] = res.data;
    //   }
    // })
  }
  onGoToLogin(){
    this.props.history.push(`/user/login`)
  }
  render() {
    return (
      <Row className="h-100">
        <Colxx xxs="12" md="10" className="mx-auto my-auto">
          <Card className="auth-card">
            {/* <div className="position-relative image-side ">
              <p className="text-white h2">MAGIC IS IN THE DETAILS</p>
              <p className="white mb-0">
                Please use this form to register. <br />
                If you are a member, please{" "}
                <div onClick={() => { this.onGoToLogin() }} className="white">
                  login
                </div>
                .
              </p>
            </div> */}
            <div className="form-side">
              {/* <NavLink to={`/`} className="white">
                <span className="logo-single" />
              </NavLink> */}
              <CardTitle className="mb-4">
                <IntlMessages id="user.register" />
              </CardTitle>
              <Form>
                <Label className="form-group has-float-label mb-4">
                  <Input type="name" defaultValue={this.state.name} />
                  <IntlMessages id="user.fullname" />
                </Label>
                <Label className="form-group has-float-label mb-4">
                  <Input type="email" defaultValue={this.state.email} />
                  <IntlMessages id="user.email" />
                </Label>
                <Label className="form-group has-float-label mb-4">
                  <Input type="name" defaultValue={this.state.organization} />
                  <IntlMessages id="Organization" />
                </Label>
                <Label className="form-group has-float-label mb-4">
                  <Input type="password" />
                  <IntlMessages
                    id="user.password"
                    defaultValue={this.state.password}
                  />
                </Label>
                <div className="d-flex justify-content-end align-items-center">
                  <Button
                    color="primary"
                    className="btn-shadow"
                    size="lg"
                    onClick={() => this.onUserRegister()}
                  >
                    <IntlMessages id="user.register-button" />
                  </Button>
                </div>
              </Form>
              <div>
                <div>
                  {'Already have an account?'}
                  <span onClick={() => { this.onGoToLogin() }} style={{marginLeft:'10px', color:'#1E90FF',cursor:'pointer'}}>
                    Login
                  </span>
                  .
                </div>
              </div>
            </div>
          </Card>
        </Colxx>
      </Row>
    );
  }
}
const mapStateToProps = ({ authUser }) => {
  const { user, loading } = authUser;
  return { user, loading };
};

export default connect(
  mapStateToProps,
  {
    registerUser,
    loginUser
  }
)(Register);
