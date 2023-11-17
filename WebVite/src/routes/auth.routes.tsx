import { Routes, Route } from 'react-router-dom';

import { ScreenSignInAdm } from '../screens/Home/SignIn/-signInAdm';

// Routas para usuário não logado
export function AuthRoutes(){
    return(
        <Routes>
            <Route path='/' element={<ScreenSignInAdm/>} />
        </Routes>
    );
}