import React from 'react'
import { useNavigate} from 'react-router-dom'

const Cohorts = ({cohorts}) => {

  const navigate = useNavigate ()
  return (
    <div className='w-[100%] mt-5 ml-5 space-y-[20px]'>
      <h1 className='w-[100%} text-center  text-blue-500'>All cohorts</h1>
      <ul className="flex gap-[10px] flex-warp items-center ">
        {cohorts?.map((cohort) => (
          <li key={cohort?.id} className="border-[1px] p-2 rounded-sm space-y-[5px]"> 
           <span className='text-pink-500'>{`Cohort Name : ${cohort.name}`}</span>
            <ul >
              <li className='text-gray-600'>{`Mentor: ${cohort.mentor}`}</li>
            <li className='text-gray-600'>{`Total students: ${cohort.studentsNum}`}</li>
            </ul>

            <button onClick={() => navigate(`/cohort/${cohort?.id}`)} className='border-[2px] px-2 rounded-md bg-green-400 text-white '>
              View student
            </button>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cohorts
