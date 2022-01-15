import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';

function ScreenRoutes () {

    const [user, setUser] = useState(null);

    const actionLoginDataGoogle = async (u) => {
        let newUser = {
            id: u.id,
            name: u.displayName,
            avatar: u.photoURL
        }

        setUser(newUser);
    }

    if(user === null) {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginScreen onReceiveGoogle={actionLoginDataGoogle} />} />
                </Routes>
            </BrowserRouter>
        )
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
            </Routes>
        </BrowserRouter>
    )
}

export default ScreenRoutes;