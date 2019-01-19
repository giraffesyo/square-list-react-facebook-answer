import React from 'react'

const styles = {
  border: '1px solid black',
  padding: '1rem',
  margin: '1rem'
}

export default ({ children, clicked, onClick }) =>
  clicked ? (
    <div name={children} onClick={onClick} style={styles}>
      X
    </div>
  ) : (
    <div name={children} style={styles} onClick={onClick}>
      {children}
    </div>
  )
