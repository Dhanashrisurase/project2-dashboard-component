import React from 'react'
import './navbar.css'

export default function navbar() {
  return (
    <div className="navbar">
    <div className="logo">AppLogo</div>
    <div className="links">
      <a href="/dashboard">DASHBOARD</a>
      <a href="/createadd">CREATEADD</a>
    </div>
  </div>
  )
}
