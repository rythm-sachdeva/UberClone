import React from 'react';

export interface UserContextInterface
{
    user : User |  any;
    setUser: React.Dispatch<React.SetStateAction<User|any>> | null;
}

export interface User {
    fullname:{
        firstName:string;
        lastName:string;
    }
    email:string;
}