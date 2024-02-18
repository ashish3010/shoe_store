import React from 'react'
import { useSelector } from 'react-redux'

const HomePage = () => {
  const userData = useSelector(state => state.userReducer)
  console.log(userData, 'user')

  return (
    <div>
      HomePage
    </div>
  )
}

export default HomePage
