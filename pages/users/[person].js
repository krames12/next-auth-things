import { useState, useEffect } from "react"
import { useFetchUser } from "../../lib/user"
import { useRouter } from 'next/router'
import Layout from "../../components/layout"
import hasuraQuery from "../../lib/graphql/hasuraQuery"

const getUserQuery = `
  query GetSpecificUser($userId: Int!) {
    users(where: {id: {_eq: $userId}}) {
      id
      name
      email
    }
  }
`

const DisplayUserInfo = ({id, name, email}) => (
  <div>{id}{name}{email}</div>
)

const UserInformation = () => {
  const { user, loading } = useFetchUser({ required: true })
  const [currentUser, setCurrentUser] = useState([]);

  const router = useRouter()
  const { person } = router.query

  useEffect( async () => {
    const {data} = await hasuraQuery(
      getUserQuery, 
      { userId: person }
    );
    setCurrentUser(data?.users[0]);

    return () => { console.log("cleaning up")}
  }, [])

  return (
    <Layout user={user} loading={loading}>
      {loading ? <>Loading...</> : <DisplayUserInfo users={currentUser} />}
    </Layout>
  )
}

export default UserInformation