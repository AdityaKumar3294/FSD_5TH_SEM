import React from 'react'

const Header = () => {
  return (
    <div 
      className="header"
      style={{
        backgroundColor: '#0e1114',
        padding: '20px',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      }}
    >
      <h1 
        style={{ 
          margin: 0, 
          color: '#ffffff', 
          fontSize: '28px',
          fontFamily: 'Arial, sans-serif',
          letterSpacing: '1px'
        }}
      >
        My Shopping App
      </h1>
    </div>
  )
}

export default Header