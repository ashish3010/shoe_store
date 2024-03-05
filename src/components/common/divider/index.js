import React from 'react'

const Divider = ({ padding, padPosition, color }) => {
  const setPadding = () => {
    if (padPosition === 'vertical') {
      return `0 ${padding}`;
    }
    if (padPosition === 'horizontal') {
      return `${padding} 0`;
    }
    return padding;
  }
  return (
    <div style={{
      width: padPosition === 'vertical' ? 1 : '100%',
      height: padPosition !== 'vertical' ? 1 : '100%',
      margin: setPadding(),
      borderBottom: padPosition !== 'vertical' ? 1 : 0,
      borderRight: padPosition === 'vertical' ? 1 : 0,
      borderTop: 0,
      borderLeft: 0,
      borderColor: color || 'black',
      borderStyle: 'solid'
    }} />
  )
}

export default Divider
