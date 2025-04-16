import {useState} from 'react'
import CohortList from './cohortList'

const Content = ({handleAttendence,handleDelete,cohorts}) => {





    return (
        <main className='h-[85vh]'>
          {cohorts.length? 
          (
            <CohortList handleAttendence={handleAttendence} handleDelete= {handleDelete} cohorts={cohorts}/>
          ) 
          
          :
          
          (<p> No cohort listed</p>)}
        </main>
      )
    }
    
    export default Content
  