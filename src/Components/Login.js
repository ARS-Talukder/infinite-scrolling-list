import React from 'react';
import { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from './Loading';
import './Login.css';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate])

    if (loading) {
        return <Loading></Loading>
    }


    let signInError;

    if (error) {
        signInError = <p className='text-red-500'><small>{error?.message}</small></p>
    }

    const handleSignIn = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);


    }
    return (
        <div className='flex justify-center items-center signing-container py-8 px-4'>
            <div className="w-full lg:w-2/6 md:w-1/2 signing-transparent">
                <h2 className="text-center">Welcome!</h2>
                <p className='text-center text-white font-light'>Today will be great.</p>
                <div className='flex justify-center'>
                    <form onSubmit={handleSignIn} className='w-4/5 mt-6' action="">
                        {/* ------------Email Field------------- */}
                        <input type="email" name="email" placeholder="Enter Your Email" className="w-full max-w-xs signing-input" required />

                        {/* ------------Password Field------------- */}
                        <input type="password" name="password" placeholder="Enter Your Password" className="w-full max-w-xs mt-8 mb-2 signing-input" required />

                        {signInError}

                        {/* ------------Submit Button------------- */}
                        <input className='btn w-full max-w-xs mt-4 submit-button' type="submit" value="Login" />

                    </form>
                </div>

                <div className='w-4/5 mx-auto'>
                    <p className='font-bold text-orange-500 mt-4'>NEW TO HERE??</p>
                    <Link className="font-bold text-blue-500 underline" to="/signup">CLICK TO CREATE NEW ACCOUNT</Link>
                </div>






            </div>

        </div>
    );
};

export default Login;