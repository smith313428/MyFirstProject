import React, { Component } from "react";
import { Row, Card, CardTitle, Label, FormGroup, Button } from "reactstrap";
import { connect } from "react-redux";
import { NotificationManager } from "../../components/common/react-notifications";
import { Formik, Form, Field } from "formik";
import { loginUser } from "../../redux/actions";
import { Colxx } from "../../components/common/CustomBootstrap";
import IntlMessages from "../../helpers/IntlMessages";
import api from "../../service/api/api"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      wrongCredential:false,
    };
  }

  onUserLogin = (values) => {
    // this.props.loginUser(
    //   {
    //     email: "admin@sharering.network",
    //     password: "hf237agnAFags"}, 
    //     this.props.history
    // );
    api.login(values.email, values.password, async (err, res) => {
      if(!err){
        this.props.loginUser(values, this.props.history);
        localStorage[`auth-token`] = res.data;
      }
    })
  }

  validateEmail = (value) => {
    let error;
    if (!value) {
      error = "Please enter your email address";
    } 
    // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    //   error = "Invalid email address";
    // }
    return error;
  }

  validatePassword = (value) => {
    let error;
    if (!value) {
      error = "Please enter your name";
    } else if (value.length < 4) {
      error = "Value must be longer than 2 characters";
    }
    return error;
  }
  
  onGoToRegister(){
    this.props.history.push(`/user/register`)
  }
  componentDidUpdate() {
    if (this.props.error) {
      NotificationManager.warning(
        this.props.error,
        "Login Error",
        3000,
        null,
        null,
        ''
      );
    }
  }

  render() {
    const { password, email,wrongCredential } = this.state;
    const initialValues = {email,password};

    return (
      <Row className="h-100">
        <Colxx xxs="12" md="5" className="mx-auto my-auto">
          <Card className="auth-card">
            <div className="form-side">
              <CardTitle className="mb-4">
                <IntlMessages id="user.login-title" />
              </CardTitle>

              <Formik
                initialValues={initialValues}
                onSubmit={this.onUserLogin}>
                {({ errors, touched }) => (
                  <Form className="av-tooltip tooltip-label-bottom">
                    <FormGroup className="form-group has-float-label">
                      <Label>
                        <IntlMessages id="user.email" />
                      </Label>
                      <Field
                        className="form-control"
                        name="email"
                        validate={this.validateEmail}
                      />
                      {errors.email && touched.email && (
                        <div className="invalid-feedback d-block">
                          {errors.email}
                        </div>
                      )}
                    </FormGroup>
                    <FormGroup className="form-group has-float-label">
                      <Label>
                        <IntlMessages id="user.password" />
                      </Label>
                      <Field
                        className="form-control"
                        type="password"
                        name="password"
                        validate={this.validatePassword}
                      />
                      {errors.password && touched.password && (
                        <div className="invalid-feedback d-block">
                          {errors.password}
                        </div>
                      )}
                    </FormGroup>
                    <div className="d-flex justify-content-between align-items-center">
                      {/* <NavLink to={`/forgot-password`}>
                        <IntlMessages id="user.forgot-password-question" />
                      </NavLink> */}
                      <Button
                        color="primary"
                        className={`btn-shadow btn-multiple-state ${this.props.loading ? "show-spinner" : ""}`}
                        size="lg"
                        // onClick={()=>{
                        //   this.props.history.push("/app/promotions");
                        // }}
                      >
                        <span className="spinner d-inline-block">
                          <span className="bounce1" />
                          <span className="bounce2" />
                          <span className="bounce3" />
                        </span>
                        <span className="label"><IntlMessages id="user.login-button" /></span>
                      </Button>
                    </div>
                    {
                      wrongCredential &&
                        <div style={{color:'red',marginTop:15}}>
                        Wrong email or password
                    </div>
                    }

                  </Form>
                  
                )}
                
              </Formik>
              <div style={{marginTop:'20px'}}>
                  <div>
                    {"Don't have an account?"}
                    <span onClick={() => { this.onGoToRegister() }} style={{marginLeft:'10px', color:'#1E90FF',cursor:'pointer'}}>
                      Create
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
  const { user, loading, error } = authUser;
  return { user, loading, error };
};

export default connect(
  mapStateToProps,
  {
    loginUser
  }
)(Login);
