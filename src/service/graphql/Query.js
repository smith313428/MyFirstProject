import gql from 'graphql-tag';
import GRAPHQL from './index'

export default class {
  
  
  static getQueryItems(params, callback) {
    const query = {
      query: gql`
        query{
          getQueryItems(
            name: "${params.name}", 
            title: "${params.title}", 
            userWalletAddress:"${params.userWalletAddress}",
            enableStatus: true, 
            createdBy: "${params.createdBy}"
            page:${params.page}
            pageSize:${params.pageSize}) 
            {
              status
              message
              data {
                items {
                    _id
                    name
                    query
                    color
                    title
                    web_hook_endpoint
                }
                page
                pageSize
                total
              }
            }
       }`
    }
    GRAPHQL.doQuery(query)
      .then(response => {
        try {
          return callback({
            status: 1,
            data: response?.data?.getQueryItems?.data
          })
        } catch (e) {
          return callback({ status: 0, message: "HTTPERROR" })
        }
      })
      .catch(error => {
        return callback({ status: 0, message: error })
      })
  } 
  
  static getQueryById(id, callback) {
    const query = {
      query: gql`
        {
          getQueryItem(
            id: "${id}") 
            {
              status
              message
              data {
                _id
                name
                title
                query
                color
              }
            }
        }`
    }
    GRAPHQL.doQuery(query)
      .then(response => {
        try {
          return callback({
            status: 1,
            data: response?.data?.getQueryItem?.data
          })
        } catch (e) {
          return callback({ status: 0, message: "HTTPERROR" })
        }
      })
      .catch(error => {
        return callback({ status: 0, message: error })
      })
  } 
  static createQueryItem(params, callback) {
    const strQuery = JSON.stringify(params.query);
    const query = {
      mutation: gql`
        mutation{
          postQuery(
            name:"${params.name}",
            title:"${params.title}",
            strQuery:${strQuery},
            userWalletAddress:"${params.userWalletAddress}",
            color:"${params.color}",
            createdBy: "tester",
            web_hook_endpoint:"${params.web_hook_endpoint}") ,
            
          {
            status
            message
            data {
                _id
                name
                query
                color
                title
                web_hook_endpoint
            }      
          }
        }   
      `
    }
    GRAPHQL.doMutate(query)
      .then(response => {
        try {
          return callback({
            status: 1,
            data: response.data.postQuery.data
          })
        } catch (e) {
          return callback({ status: 0, message: e.Message })
        }
      })
      .catch(error => {
        return callback({ status: 0, message: error })
      })
  }
  static updateQueryItem(params, callback) {
    const strQuery = JSON.stringify(params.query);
    const query = {
      mutation: gql`
        mutation {
          updateQueryDetail(
            _ID: "${params._id}", 
            queryInfo: { 
              name:"${params.name}",
              title:"${params.title}",
              userWalletAddress:"${params.userWalletAddress}",
              query: ${strQuery},
              color:"${params.color}",
              web_hook_endpoint:"${params.web_hook_endpoint}"
          }) 
          {
            status
            message
            data {
                _id
                name
                title
                query
                color
                web_hook_endpoint
            }      
          }
        }
        `
    }
    GRAPHQL.doMutate(query)
      .then(response => {
        try {
          return callback({
            status: 1,
            data: response.data.updateQueryDetail.data
          })
        } catch (e) {
          return callback({ status: 0, message: e.Message })
        }
      })
      .catch(error => {
        return callback({ status: 0, message: error })
      })
  }
  static getQRRequestItems(params,callback) {
    const query = {
      query: gql`
        {
          getQRRequestItems (
            queryId: "${params.queryId}"
            sessionId: "${params.sessionId}"
            userName: "${params.userName}"
            type: "query"
            userWalletAddress:"${params.userWalletAddress}"
            page:${params.page}
            pageSize:${params.pageSize}
            )
            {
              status
              message
              data {
                items {_id
                  query_id
                  session_id
                  result
                  completion
                  _created
                  _updated
                  user_name
                  query_info {                     
                      name
                      title
                      color
                      created_by
                      _created
                      _updated
                  }
                }
                page
                pageSize
                total
              }
            }
        }`
    }
    GRAPHQL.doQuery(query)
      .then(response => {
        try {
          return callback({
            status: 1,
            data: response?.data?.getQRRequestItems?.data
          })
        } catch (e) {
          return callback({ status: 0, message: "HTTPERROR" })
        }
      })
      .catch(error => {
        return callback({ status: 0, message: error })
      })
  } 
  
  static generateQRSession( callback) {
    const query = {
      mutation: gql`
        mutation {
          generateQRSession {
            status
            message
            data {
                session_id
            }      
          }
        }
      `
    }
    GRAPHQL.doMutate(query)
      .then(response => {
        try {
          return callback({
            status: 1,
            data: response.data.generateQRSession.data
          })
        } catch (e) {
          return callback({ status: 0, message: e.Message })
        }
      })
      .catch(error => {
        return callback({ status: 0, message: error })
      })
  }
  static deleteQueryItem(params, callback) {
    const query = {
      mutation: gql`
        mutation {
          deleteQuery(_ID: "${params._id}") {
            status
            message
            data {
                _id
                name
                query
            }      
          }
        }
      `
    }
    GRAPHQL.doMutate(query)
      .then(response => {
        try {
          return callback({
            status: 1,
            data: response.data.deleteQuery.data
          })
        } catch (e) {
          return callback({ status: 0, message: e.Message })
        }
      })
      .catch(error => {
        return callback({ status: 0, message: error })
      })
  }
  static getQRRequestItemsForLogin(params,callback) {
    const query = {
      query: gql`
        {
          getQRRequestItems (
            queryId: "${params?.queryId}"
            sessionId: "${params?.sessionId}"
            userName: "${params?.userName}"
            type: "login" 
            userWalletAddress: ""
            page:${params?.page}
            pageSize:${params?.pageSize}
            )
            {
              status
              message
              data {
                items {_id
                  query_id
                  session_id
                  result
                  user_wallet_address
                  user_name
                  type
                  query_info {
                    _id
                    name
                    title
                  }
                  completion
                  _created
                  _updated
                }
                page
                pageSize
                total
              }
            }
        }`
    }
    GRAPHQL.doQuery(query)
      .then(response => {
        try {
          return callback({
            status: 1,
            data: response?.data?.getQRRequestItems?.data
          })
        } catch (e) {
          return callback({ status: 0, message: "HTTPERROR" })
        }
      })
      .catch(error => {
        return callback({ status: 0, message: error })
      })
  } 
}
