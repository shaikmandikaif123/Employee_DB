import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to="/create">Createaccount</Link><br />
      <Link to="/accounts">Accounts</Link>
    </div>
  )
}

export default Home