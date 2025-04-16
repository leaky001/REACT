import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cohorts from "./Pages/Cohorts"
// import CohortStudents from './pages/CohortStudents'
import cohortsData from './data/CohortsData'
import Home from './Pages/home'
import Countries from './Countries'
import CountryDetails from './CountryDetails'






const App = () => {

  const [cohorts, setCohorts] = useState([]);

  
  const local_Key = "cohorts-data"
  
  useEffect(() => {

    const stored = localStorage.getItem(local_Key) || []

    if (stored?.length) {
      setCohorts(() => JSON.parse(stored))
    }else{
      localStorage.setItem(local_Key, JSON.stringify(cohortsData));
      
      setCohorts(cohortsData)
    }
  }, [])

  
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/countries' element={<Countries/>}/>
        <Route path="/country/:code" element={<CountryDetails />} />
        {/* <Route path='/cohort/:id/' element={<CohortStudents cohorts={cohorts}/>}/> */}
        
      </Routes>

        
    </div>
  )
}



function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


export default App