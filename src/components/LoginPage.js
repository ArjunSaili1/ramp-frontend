import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export default function LoginPage() {
    const {authToken, setAuthToken} = useContext(AuthContext)
    return (
        <div>LoginPage</div>
    )
}
