import hasuraQuery from "./hasuraQuery";

const getUsersQuery = `
  query GetUsers {
    users {
      name
      id
      email
    }
  }
`

const getUsers = async () => {
  const {data} = hasuraQuery(getUsersQuery)

  return data.users
}

export default getUsers;