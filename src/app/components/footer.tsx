import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className='bg-gray-100 py-8 px-10 text-gray-800 flex justify-around'> </footer>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 '></div>
        <div>
          <h3 className='text-xl font-bold mb-4'>Jobs</h3>
            <ul className='space-y-2 text-lg'>Programming</ul>
            <ul>Engineering</ul>
            <ul>Medical</ul>
        </div>  
    </div>
  )
}
