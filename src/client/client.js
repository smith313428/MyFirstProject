import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import Config from "../service/api/config";

const  headers = {
        'Content-Type': 'application/json',
        Authorization: `bearer ${"(H+KbPeShVmYq3t6w9z$C&F)J@NcQfTjWnZr4u7x!A%D*G-KaPdSgUkXp2s5v8y/"}`
}

const link = new HttpLink({ uri: `${Config.BACKEND_API_URL}/graphql/`, headers })
const cache = new InMemoryCache()
const client = new ApolloClient({
  link,
  cache
})

export default client