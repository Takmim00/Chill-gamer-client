import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <p className='text-3xl font-bold'>Page not Pound</p>
            <p className='text-xl font-medium'>Go Back to <NavLink to='/' className='text-red-500'>Home</NavLink> </p>
        </div>
    );
};

export default ErrorPage;