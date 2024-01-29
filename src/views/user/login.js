import React, { Component } from "react";
import { Row, Card, CardTitle, Label, FormGroup, Button } from "reactstrap";
import { connect } from "react-redux";
import { NotificationManager } from "../../components/common/react-notifications";
import { Formik, Form, Field } from "formik";
import { loginUser } from "../../redux/actions";
import { Colxx } from "../../components/common/CustomBootstrap";
import IntlMessages from "../../helpers/IntlMessages";
import api from "../../service/api/api"
import QRCode from "react-qr-code";
import APIServices from '../../service/graphql/Query'

let nIntervId= 0
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      wrongCredential:false,
      count:0,
      qrCode:'',
      sessionId:''
    };
  }
  componentDidMount() {
    this.onGenerateSession()
  }

  
  onGenerateSession = () => {
    APIServices.generateQRSession(response=>{
      if(response.status === 1){
        this.setState({qrCode:'login:'+response?.data?.session_id})
        this.setState({sessionId:response?.data?.session_id})
        nIntervId = setInterval(() => {
          this.onWatch();
        }, 5000);
      }
    })
  }
  onWatch = () => {
    const {sessionId} = this.state
    const params={
      'queryId':'',
      'sessionId':sessionId,
      'userName':'',
      'page':1,
      'pageSize':1
    }

    APIServices.getQRRequestItemsForLogin(params,response=>{
      if(response.status === 1&&response?.data?.items&&response?.data?.items.length>0){
        const token=JSON.parse(response?.data?.items[0]?.result)
        const userWalletAddress=response?.data?.items[0]?.user_wallet_address
        const userName=response?.data?.items[0]?.user_name
        const user={userName,userWalletAddress}
        clearInterval(nIntervId);
        localStorage[`auth-token`] = token?.totoken;
        this.props.loginUser(user, this.props.history);
      }
    })
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
    const { password, email,qrCode,wrongCredential } = this.state;
    const initialValues = {email,password};
    return (
      <Row className="h-100">
        <Colxx xxs="12" md="5" className="mx-auto my-auto">
            
          <Card className="">
            <div className="d-flex justify-content-center" style={{fontSize:'24px',fontWeight:'bold',lineBreak: 'anywhere',backgroundColor:'#54ab45',padding:'30px',color:'white'}}>
              SIGN IN
            </div>
            <div className="form-side " style={{padding: '50px'}}>
              <div className="d-flex flex-row justify-content-center">
                <QRCode
                  size={256}
                  style={{ height: "auto", maxWidth: "100%", width: "70%", alignItems:'center'}}
                  value={qrCode}
                  viewBox={`0 0 256 256`}
                />
              </div>
              <div className="mt-4 d-flex justify-content-center" style={{fontSize:'14px',fontWeight:'bold',lineBreak: 'anywhere'}}>
                {"Scan the code with the Sharering App."}
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
