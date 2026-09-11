import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <div 
      className="navbar" 
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#26bde2',
        padding: '15px 20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
    >
      <Link to="/" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '16px', fontWeight: '500', padding: '5px 10px' }}>Home</Link>
      <Link to="/cart" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '16px', fontWeight: '500', padding: '5px 10px' }}>MyCart</Link>
      <Link to="/orders" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '16px', fontWeight: '500', padding: '5px 10px' }}>Myorders</Link>
      <Link to="/setting" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '16px', fontWeight: '500', padding: '5px 10px' }}>Setting</Link>
      <Link to="/profile" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '16px', fontWeight: '500', padding: '5px 10px' }}>MyProfile</Link>
      <Link to="/logout" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '16px', fontWeight: '500', padding: '5px 10px' }}>Logout</Link>
    </div>
  )
}

export default Navbar