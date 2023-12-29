import React, { useEffect, useState } from 'react';
import UserAuthContext from '../context/userAuthContext';


export default function UserAuthState(props) {
    const users = JSON.parse(sessionStorage.getItem('user'))
    const [user, setUser] = React.useState({
        isLoggedin: (users?.isLoggedin) ? users?.isLoggedin : false,
        userName: (sessionStorage.getItem('user')) ? users?.userName : 'Guest',
        userRole: (sessionStorage.getItem('user')) ? users?.userRole : 'guest',
        fallback: (users?.fallback) ? users?.fallback : '/signin',
        userMail: (users?.userMail) ? users?.userMail : null,
        isVerified: (users?.isVerified) ? users?.isVerified : null,
    })

    useEffect(() => {
        console.log('User Updated', user);
    }, [user]);

    const [cartBill, setCartBill] = React.useState({
        totalMRP: 0,
        discount: 0,
        subTotal: 0,
        total: 0,
    })
    return (
        <UserAuthContext.Provider value={{ user, setUser, cartBill, setCartBill }}>
            {
                props.children
            }
        </UserAuthContext.Provider>
    )
}