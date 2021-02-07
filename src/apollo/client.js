import {
  ApolloClient
} from 'apollo-client'
import {
  InMemoryCache
} from 'apollo-cache-inmemory'
import {
  HttpLink
} from 'apollo-link-http'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://graph.goswap.app/subgraphs/name/goswap6/swap',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://subgraph.unisave.exchange/heco/index/graphql',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const v1Client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap'
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://graph.goswap.app/subgraphs/name/goswap7/swap',
  }),
  cache: new InMemoryCache(),
})