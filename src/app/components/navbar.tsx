import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav className='w-full h-[90px] flex justify-between bg-slate-600 text-white p-6'>
            <div className='text-xl font-bold pl-10'><Link href={"/"}>Umair Sharif Khan</Link></div>
            <div>
                <div className='flex gap-x-6 font-semibold pr-6'>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/about"}>About</Link>
                    <Link href={"/contact"}>Contact us</Link>
                    <Link href={"/help"}>Help</Link>
                    <Link href={"/login"}>Login</Link>
                    <Link href={"/signout"}>Signout</Link>
                </div>
            </div>

        </nav>
    </div>
  )
}
