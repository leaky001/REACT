import React from 'react'

const Footer = () => {
    const today = new Date()

  return (
    <footer className='bg-green-900 py-4 px-4 flex justify-center items-center'>
        <p className='text-[11px] text-white'>Copyright &copy; {today.getFullYear()}</p>
      
    </footer>
  )
}

export default Footer
