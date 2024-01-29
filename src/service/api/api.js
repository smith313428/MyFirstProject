import Config from "./config";

export default {
  async baseApi(sub_url, method, json_data, type = "DEV", cb) {
    let authToken = localStorage["auth-token"];
    try {
      let request = {
        method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: authToken ? "Bearer " + authToken : null,
        },
      };
      if (method == "POST" || method == "PUT") {
        request["body"] = JSON.stringify(json_data);
      }
      let base_url =''
      if(sub_url=='/login'){
        base_url = 'https://api.testenv.sharetoken.io/auth'
      }
      else{
        base_url = type == "AUTH" ? Config.AUTH_API_URL : Config.WEB_API_URL;
      }      
      let response = await fetch(base_url + sub_url, request);
      let responseJson = await response.json();
      if (response.status >= 200 && response.status < 300) {
        cb && cb(null, responseJson);
      } else {
        cb && cb(responseJson, null);
      }
    } catch (error) {
      cb && cb(error, null);
    }
  },

  async backendApi(sub_url, method, json_data, cb) {
    let authToken = localStorage["auth-token"];
    try {
      let request = {
        method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: authToken ? "Bearer " + authToken : null,
        },
      };
      if (method == "POST" || method == "PUT") {
        request["body"] = JSON.stringify(json_data);
      }
      const base_url = Config.BACKEND_API_URL;
      let response = await fetch(base_url + sub_url, request);
      let responseJson = await response.json();
      if (response.status >= 200 && response.status < 300) {
        cb && cb(null, responseJson);
      } else {
        cb && cb(responseJson, null);
      }
    } catch (error) {
      cb && cb(error, null);
    }
  },

  async init(cb) {
    var email = localStorage.email;
    var password = localStorage.password;
    if (password) {
      this.login(email, password, (err, user) => {
        cb(err, user);
      });
    } else {
      cb(null);
    }
  },
  login(email, password, cb) {
    this.baseApi("/login", "POST", { email, password }, "AUTH", (err, res) => {
      if (err == null) {
        console.log("Login success!");
      }
      cb(err, res);
    });
  },
};
