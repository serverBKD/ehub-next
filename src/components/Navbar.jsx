import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
      <nav className='bg-[#717170] font-bold w-full h-5 px-10 py-6 flex justify-between items-center'>
          <Link href={'/'} className='text-2xl'>MultiHogar</Link>
          <ul className='flex justify-center space-x-4 text-sm'>
              <Link href={'/'}>Home</Link>
              <Link href={'/products'}>Producto</Link>
              <Link href={'/contacto'}>Contacto</Link>
          </ul>
    </nav>
  )
}

export default Navbar