import Cohort from "./cohort"

const CohortList = ({handleAttendence , handleDelete ,cohorts}) => {
  return ( 
  <ul className='flex flex-col items-start gap-1'>
    {cohorts.map((cohort) => (
      <Cohort  handleAttendence={handleAttendence} handleDelete={handleDelete} cohort={cohort}/>
    ))}
  </ul>
   
  )
}

export default CohortList
