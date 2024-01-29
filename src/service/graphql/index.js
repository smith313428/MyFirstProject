import ApolloClient from 'apollo-boost'
import Config from '../api/config'
const API_URL = Config.BACKEND_API_URL + '/graphql';
export default class {
  static doQuery(query) {
      let authToken = localStorage["auth-token"];
      const client = new ApolloClient({
        uri: API_URL,
        headers: {
          Authorization: authToken ? "Bearer " + authToken : ''
        }
      })

      return client.query(query)
        .then(response => {
          return response
        })
        .catch(error => {
          if(error.graphQLErrors){
            return error.graphQLErrors
          }
          return "HTT_ERROR"
        })
    
  }

  static doMutate(query) {
    let authToken = localStorage["auth-token"];
      const client = new ApolloClient({
        uri: API_URL,
        headers: {
          Authorization: authToken ? "Bearer " + authToken : ''
        }
      })

      return client.mutate(query)
        .then(response => {
          return response
        })
        .catch(error => {
          if(JSON.stringify(error).indexOf('Invalid nonce') > -1){
            return error.graphQLErrors[0].message
          }
          if(error.graphQLErrors){
            return error.graphQLErrors
          }
          return "NETWORK_ERROR"
        })
  
  }
}
