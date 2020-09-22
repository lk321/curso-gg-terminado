import gql from 'graphql-tag'

export const userFragment = gql`
    fragment UserFragment on User {
        id
        name
        last_name
        email
        position
        github
        company {
            id
            name
        }
    }
`

export const usersQuery = gql`
    query {
        users {
            ...UserFragment
        }
    }
    ${userFragment}
`

export const userQuery = gql`
    query userQuery($id: Int!) {
        user(id: $id) {
            ...UserFragment
        }
    }
    ${userFragment}
`


export const addUserMutation = gql`
    mutation addUser($user: UserInput!) {
        user: addUser(user: $user) {
            ...UserFragment
        }
    }
    ${userFragment}
`

export const userAddedSubscription = gql`
    subscription {
        userAdded {
            id
            name
            last_name
            email
            position
            github
        }
    } 
`

