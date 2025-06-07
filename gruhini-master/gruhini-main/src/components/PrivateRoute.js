//this will be wrapped inside the empower route so that 
//an unAuthenticated user cant access the main pages

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../data/auth';

 

export default function PrivateRoute({child}){

    const {user} = useAuthContext();
    if(!user){
        return <Navigate to="/"/> 
    }
    return child;
}