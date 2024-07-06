

import './assets/all.min.css'
import './App.css'
import SignUp from './SingUp'
import Header from './components/Header'
import {Routes , Route } from 'react-router-dom'

export default function App() {
    
    return(
        <div>
            <Header />
            <Routes>
                <Route path='/register' element={<SignUp />} />
            </Routes>
        </div>
    )
};