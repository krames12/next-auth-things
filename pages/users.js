// This import is only needed when checking authentication status directly from getInitialProps
// import auth0 from '../lib/auth0'
import { useState, useEffect } from "react"
import { useFetchUser } from '../lib/user'
import getUsers from "../lib/graphql/getUsers"
import Layout from '../components/layout'

function UserList({users}) {
  return (
    <>
      <h1>All Users</h1>
      <ul>
        {users.map( ({id, name, email}) => (
          <li key={id}>{name} - {email}</li>
        ))}
      </ul>
    </>
  )
}

const Users = () => {
  const { user, loading } = useFetchUser({ required: true })
  const [managingUsers, setManagingUsers] = useState([]);

  useEffect( async () => {
    const currentUsers = await getUsers();
    setManagingUsers(currentUsers);
  }, [])

  return (
    <Layout user={user} loading={loading}>
      {loading ? <>Loading...</> : <UserList users={managingUsers} />}
    </Layout>
  )
}

export default Users
