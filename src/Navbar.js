// Navigation.js
import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav>
            <ul>
                <li>
                    <button onClick={() => navigate('/')}>
                        Home
                    </button>
                </li>
                <li>
                    <button onClick={() => navigate('/JSXDemo')}>
                        JSX
                    </button>
                </li>
                <li>
                    <button onClick={() => navigate('/states')}>
                        States
                    </button>
                </li>
                <li>
                    <button onClick={() => navigate('/props')}>
                        Props
                    </button>
                </li>
                <li>
                    <button onClick={() => navigate('/useEffect')}>
                        useEffect
                    </button>
                </li>
                <li>
                    <button onClick={() => navigate('/styles')}>
                        CSS
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;