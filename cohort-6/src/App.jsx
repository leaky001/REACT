import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'



const App = () => { 
  const [cohorts, setCohorts] = useState([
        {
            id:1,
            name: "Lateefat",
            gender: "Female",
            attendance:true
        },
        {
            id:2,
            name: "Abdullah",
            gender: "male",
            attendance:false
        },
        {
            id:3,
            name: "Feranmi",
            gender: "male",
            attendance:true
        },
        {
            id:4,
            name: "Idrees",
            gender: "male",
            attendance:true
        },
    ] )

    const handleAttendence = (id) => {
        const cohortList = cohorts.map((cohort) => cohort.id === id ? {...cohort, attendance: !cohort.attendance} : cohort)

        setCohorts(cohortList)
        localStorage.setItem('cohortlist', JSON.stringify(cohortList))
    }


    const handleDelete = (id) => {
        const cohortList = cohorts.filter((cohort) => cohort.id !== id );
        setCohorts(cohortList)
        localStorage.setItem('cohortlist',JSON.stringify(cohortList))
    }


  return (
    <div>
      <Header/>
      <Content cohorts={cohorts} handleAttendence={handleAttendence} handleDelete={handleDelete}/>
      <Footer/>
    </div>
  )
}

export default App
