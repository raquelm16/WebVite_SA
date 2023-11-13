import { Routes, Route } from 'react-router-dom';

import { ScreenSignInAdm } from '../screens/Home/SignIn/-signInAdm';

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/screenSignInAdm' element={<ScreenSignInAdm/>} />
        </Routes>
    )
}