import React from 'react'

const Space = ({ value, direction }) => {
  return (
    <div style={{
      paddingBottom: direction !== 'vertical' ? value : 0,
      paddingRight: direction === 'vertical' ? value : 0
    }} />
  )
}

export default Space
