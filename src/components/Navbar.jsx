import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
      <nav className='bg-[#717170] font-bold w-full h-5 px-3 py-6 flex justify-between items-center'>
          <Link href={'/'}>MultiHogar</Link>
          <ul className='flex justify-center space-x-4 text-sm'>
              <Link href={'/'}>Home</Link>
              <Link href={'/'}>Products</Link>
              <Link href={'/'}>Contact</Link>
              {/* <Link href={'/'}>Blog</Link>
              <Link href={'/'}>Contact</Link> */}
          </ul>
    </nav>
  )
}

export default Navbar