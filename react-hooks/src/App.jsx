import React from 'react'
import { HashRouter, Route , Routes} from 'react-router-dom'
import Home from './Pages/Home'
import NumberBox from './Pages/NumberBox'
import { partnerPlans } from './Data/PartnerPlans'

const App = () => {
  return (
    <div className='min-h-screen bg-primaryColor md:px-20 px-5'>
      <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/number-Box' element={<NumberBox />} />
        <Route path='/partner-card' element={<partnerPlans />} />
        
      </Routes>
      </HashRouter>
      
    </div>
  )
}

export default App
