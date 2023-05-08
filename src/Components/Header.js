import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Loading from './Loading';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        <Loading></Loading>
    };
    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };
    return (
        <div className="navbar bg-gray-300">
            <div className="navbar-start">
            </div>
            <div className="navbar-center normal-case text-xl font-bold">
                Infinite Scrolling List
            </div>
            <div className="navbar-end">
                {
                    user && <button className='btn btn-sm' onClick={handleSignOut}>Log Out</button>
                }
            </div>
        </div>
    );
};

export default Header;