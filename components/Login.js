import React from 'react'
import { useAuth } from '../contexts/auth'

export default function Login() {
    const { login } = useAuth()
    function handleLogIn(event) {
        event.preventDefault();
        login(event.target.username.value, event.target.password.value)

    }
    return (
        <div className="flex items-center justify-center min-h-screen">
            <form
                className="w-3/6 p-10 bg-green-200 border-4 border-green-600 rounded-xl"
                onSubmit={handleLogIn}
            >
                <div className="flex flex-col items-center px-10">
                    <label className="text-xl font-medium ">USER NAME</label>
                    <input
                        className="w-full p-5 mt-5 "
                        name="username"
                        placeholder="User Name"
                    />
                </div>
                <div className="flex flex-col items-center p-10">
                    <label className="text-xl font-medium">PASSWORD</label>
                    <input
                        className="w-full p-5 mt-5"
                        name="password"
                        type="password"
                        placeholder="password"
                    />
                </div>
                <div className="flex flex-col items-center px-10">
                    <button onClick={()=>login("root","root")} type="submit" className="w-full p-5 bg-green-600 rounded-xl">
                        SIGN IN
                    </button>
                </div>
            </form>
        </div>
    )
}