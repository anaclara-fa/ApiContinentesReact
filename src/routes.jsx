import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Africa from './pages/Africa/index'
import America from './pages/America/index'
import Asia from './pages/Asia/index'
import Europa from './pages/Europa/index'
import Oceania from './pages/Oceania/index'


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/america" element={<America />} ></Route>
                <Route path="/africa" element={<Africa />} ></Route>
                <Route path="/asia" element={<Asia />} ></Route>
                <Route path="/europa" element={<Europa />} ></Route>
                <Route path="/oceania" element={<Oceania />} ></Route>
                
            </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes
