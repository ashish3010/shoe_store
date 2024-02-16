import React from 'react'
import { useSelector } from 'react-redux'

const HomePage = () => {
  const userData = useSelector(state => state.userReducer)
  console.log(userData, 'user')
  return (
    <div>
      Home
    </div>
  )
}

export default HomePage
