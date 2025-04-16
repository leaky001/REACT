

const cohort = ({handleAttendence, handleDelete, cohort}) => {
  return (
    <li key={cohort.id} style={(cohort.attendance) ? {border:'green 2px solid'} : null} className='bg-[#e9edc9] py-[4px] px-8 w-full flex items-center justify-between'>


        <input type="checkbox" onChange={() => handleAttendence(cohort.id)} className='cursor-pointer w-[48px] h-[48px]' checked={(cohort.attendance)? true : null} />

        <label onDoubleClick ={() => handleAttendence(cohort.id)} className='text-[25px]'>{cohort.name}</label>

        <button className='text-[25px] text-red-700' onClick={() => handleDelete (cohort.id)}>Delete</button>
      </li>
  )
}

export default cohort
