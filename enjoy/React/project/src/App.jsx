import React from 'react'
import Home from './CRUD/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Createaccount from './CRUD/Createaccount'
import Accounts from './CRUD/Accounts'
import Edit from './CRUD/Edit'

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Home/>
        <Routes>
            <Route element={<Createaccount/>} path='/create'/>
            <Route element={<Accounts/>} path='/accounts'/>
            <Route element={<Edit/>} path='/edit/:id'/>
        </Routes>
        </BrowserRouter>

    </div>
  )
}

export default App