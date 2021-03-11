const getUsersQuery = `
  query GetUsers {
    users {
      name
      id
      email
    }
  }
`

const getUsers = () => {
  fetch(process.env.NEXT_PUBLIC_DB_ENDPOINT, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': process.env.NEXT_PUBLIC_DB_ADMIN_SECRET
    },
    body: JSON.stringify({
      query: getUsersQuery,
      variables: {}
    })
  })
  .then( response => response.json() )
  .then( data => data)
}

export default getUsers;