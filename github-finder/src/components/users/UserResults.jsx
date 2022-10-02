import {useEffect, useState} from 'react'

function UserResults() {
  useEffect(()=> {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, 
    {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    })

    const data = await response.json()

    setUsers(data)
    setLoading(false)
  }



  return (
    <div className='grid grid-cols-1 gap-8 xl:'>UserResults</div>
    
  )
}

export default UserResults