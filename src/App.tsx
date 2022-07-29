import Navbar from './components/Navbar'
import Home from './pages/Home'
import NewUser from './pages/NewUser'
import Users from './pages/Users'
import {Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <div className='max-w-[1200px] mx-auto'>
    <Navbar/>
    <Routes> 
      <Route path='/' element={<Home/>} />
      <Route path='/new-user' element={<NewUser/>}/>
      <Route path='/users' element={<Users/>}/>
    </Routes>
    </div>
  )
}

export default App