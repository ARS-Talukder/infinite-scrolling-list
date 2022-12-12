import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { useState } from 'react';
import auth from '../firebase.init';
import Loading from './Loading';

const SignUp = () => {
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();

    if (loading ) {
        <Loading></Loading>
    }

    let signInError;

    if (error ) {
        signInError = <p className='text-red-500 font-bold'><small>{error?.message}</small></p>
    }

    if (user) {
        navigate('/');
    }

    const handlePasswordFocus = () => {
        setPasswordError('')
    }

    const handleSignUp = async event => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirm.value;
        if (password !== confirmPassword) {
            setPasswordError('Sorry!! Password and Confirm Password did not match')

        }
        else {
            await createUserWithEmailAndPassword(email, password);
            // navigate('/')
        }

    }
    return (
        <div className='flex justify-center items-center signing-container py-8 px-4'>
            <div className="w-full lg:w-2/6 md:w-1/2 signing-transparent">
                <h2 className="text-center">Sign Up</h2>
                <p className='text-center text-white font-light'>Welcome to THE GOLDEN STYLE</p>
                <div className='flex justify-center'>
                    <form onSubmit={handleSignUp} className='w-4/5 mt-3' action="">
                        {/* ------------Name Field------------- */}
                        <input type="text" name="name" placeholder="Your Name" className="w-full max-w-xs my-3 signing-input" required />

                        {/* ------------Email Field------------- */}
                        <input type="email" name="email" placeholder="Enter Your Email" className="w-full max-w-xs my-3 signing-input" required />

                        {/* ------------Password Field------------- */}
                        <input onFocus={handlePasswordFocus} type="password" name="password" placeholder="Enter Your Password" className="w-full max-w-xs my-3 signing-input" required />

                        {/* ------------Confirm Password Field------------- */}
                        <input onFocus={handlePasswordFocus} type="password" name="confirm" placeholder="Enter Your Confirm Password" className="w-full max-w-xs mt-2 signing-input" required />

                        <p className='text-red-500 font-bold'><small>{passwordError}</small></p>
                        {signInError}


                        {/* ------------Submit Button------------- */}
                        <input className='btn w-full max-w-xs mt-4 submit-button' type="submit" value="Sign up" />


                    </form>
                </div>

                <div className='w-4/5 mx-auto'>
                    <p className='font-bold text-orange-500 mt-4'>Already Have An Account??</p>
                    <Link className="font-bold signing-link text-blue-500 underline" to="/login">CLICK HERE TO LOGIN</Link>
                </div>

            </div>
        </div>
    );
};

export default SignUp;