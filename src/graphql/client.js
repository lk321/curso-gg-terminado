import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, split } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { WebSocketLink } from '@apollo/client/link/ws'

const httpUrl = 'http://localhost:3001/graphql'
const wsUrl = 'ws://localhost:3001/graphql'

const httpLink = ApolloLink.from([
    new HttpLink({ uri: httpUrl })
])

const wsLink = new WebSocketLink({ uri: wsUrl })

const isSubscription = ({ query }) => {
    const definition = getMainDefinition(query)

    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
}

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: split(isSubscription, wsLink, httpLink)
})

export default client