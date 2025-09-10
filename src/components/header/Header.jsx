import React from 'react'
import TopNav from '../TopNav'
import MainNavbar from '../MainNavbar'
import Navbar from './Navbar'

export default function Header() {
  return (
      <div className='fixed top-0 left-0 w-full z-50'>
          {/* <TopNav /> */}
      {/* <MainNavbar /> */}
      <Navbar />
      </div>
  )
}
