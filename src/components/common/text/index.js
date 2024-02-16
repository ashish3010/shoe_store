/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from '@emotion/react';

const Text = ({ fontSize, children, color, bold, className, onClick }) => {
  return (
    <p onClick={onClick} className={className} style={{
      display: 'block', cursor: onClick && 'pointer', fontSize, color, fontWeight: bold && 600
    }}>{children}</p>
  )
}

export default Text
