import { Route, Routes } from 'react-router-dom'
import './App.css'
import eden from '../src/assets/eden.jpeg'

import { StatusPage } from './components/StatusPage'
import { PageFour } from './pages/PageFour'

import { PageOne } from './pages/PageOne'
import { PageThree } from './pages/PageThree'
import { PageTwo } from './pages/PageTwo'



function App() {

  return (
    <div className="App">
      {/* logo */}
      <section className='logo'>
        <img src={eden} alt="logo-image" />
        <h3>Eden</h3>
      </section>

      {/* stepper  */}
      <section className='statusIndicator'>
      <StatusPage/>
      </section>

      {/* routes  */}
      <Routes>
        <Route path='/' element={<PageOne/>}/>
        <Route path='/workspace-details' element={<PageTwo/>}/>
        <Route path='/workspace-plan' element={<PageThree/>}/>
        <Route path='/complete' element={<PageFour/>}/>
      </Routes>
    </div>
  )
}

export default App
