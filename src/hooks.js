import { useQuery, useSubscription } from '@apollo/client'

import { usersQuery, userAddedSubscription } from './graphql/queries'

export const useBoardUsers = () => {
    const { data } = useQuery(usersQuery)

    const users = data ? data.users : []

    useSubscription(userAddedSubscription, {
        onSubscriptionData: ({ client, subscriptionData: { data } }) => {
            client.writeQuery({
                query: usersQuery,
                data: {
                    users: [...users, data.userAdded]
                }
            })
        }
    })

    const addUser = (name) => console.log(name)

    return { users, addUser }
}