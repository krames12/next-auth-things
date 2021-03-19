import Link from 'next/link'

const User = ({id, name, email}) => (
  <div>
    <Link href={`/users/${id}`}>
      <a>{name}</a>
    </Link>
    <p>{email}</p>
  </div>
)

export default User;