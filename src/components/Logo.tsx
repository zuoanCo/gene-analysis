import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import logo from '@/assets/images/logo.png'
export const Logo: FC = () => {
    const navigate = useNavigate()
    const toHome = () => {
        navigate('/')
    }

    return <img className='cursor-pointer' onClick={toHome} style={{ display: 'inline-block', width: '50px', height: '50px'}} src={logo} alt="" />;
};