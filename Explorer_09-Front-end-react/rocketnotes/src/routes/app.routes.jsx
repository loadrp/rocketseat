import { Routes, Route } from 'react-router-dom'

import { New } from '../pages/New'
import { Profile } from '../pages/Profile'
import { App } from '../pages/App'
import { Home } from '../pages/Home'

export function AppRoutes(){
  return(
    <Routes>
      <Route path='/new' element={<New/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/details/:id' element={<App/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>

  )

}