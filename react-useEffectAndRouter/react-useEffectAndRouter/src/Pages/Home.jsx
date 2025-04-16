import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='h-screen flex  flex-col justify-center space-y-[20px] items-center'>
      <h1 className='text-blue-500 text-[30px]'>Cohort Manager </h1>

     <div className='flex justify-center items-center gap-[20px]'>
        <button className='border-[2px] px-2 rounded-md'>
        <Link to="/cohorts" className='text-purple-600'>Viewcohorts</Link>
        </button>
        <button className='border-[2px] px-2 rounded-md'>
         <Link className='text-green-600'>Add cohort</Link>
         </button>
     </div>

    </div>
  );
};

export default Home
