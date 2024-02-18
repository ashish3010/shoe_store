/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from '@emotion/react';
import { black } from '../../../styles/colors';

const Text = ({ fontSize, children, color = black, bold, className, onClick }) => {
  return (
    <p onClick={onClick} className={className} style={{
      display: 'block', margin: 0, cursor: onClick && 'pointer', fontSize, color, fontWeight: bold, lineHeight: '1.3rem'
    }}>{children}</p>
  )
}

export default Text
