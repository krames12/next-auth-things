const hasuraQuery = async (query, variables = {}) => {
  return await fetch(process.env.NEXT_PUBLIC_DB_ENDPOINT, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': process.env.NEXT_PUBLIC_DB_ADMIN_SECRET
    },
    body: JSON.stringify({
      query: query,
      variables
    })
  })
  .then( response => response.json() )
}