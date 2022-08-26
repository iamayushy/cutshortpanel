import { Route, Routes } from 'react-router-dom'
import './App.css'
import { StatusPage } from './components/StatusPage'
import { PageFour } from './pages/PageFour'

import { PageOne } from './pages/PageOne'
import { PageThree } from './pages/PageThree'
import { PageTwo } from './pages/PageTwo'

function App() {

  return (
    <div className="App">
      <section className='statusIndicator'>
      <StatusPage/>
      </section>
      <Routes>
        <Route path='/' element={<PageOne/>}/>
        <Route path='/workspace-details' element={<PageTwo/>}/>
        <Route path='/workspace-plan' element={<PageThree/>}/>
        <Route path='/complete' element={<PageFour/>}/>
      </Routes>
      {/* <ErrorComp errorName={'Name is No'}/> */}
      {/* <PageOne/>
      <PageTwo/> */}
    </div>
  )
}

export default App
