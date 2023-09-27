import React, { useState } from 'react'
// import {toast,Toaster} from "react-hot-toast"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [rollno, setRollno] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        // toast("Wow so easy!");
        try {
            if(!rollno||!password){
                toast.error("Enter all The fields First.")
                return;
            }
            setRollno(rollno.toUpperCase());
            // console.log(rollno)
            const config = {
                headers:{
                    "Content-Type":"application/json"
                },
            };
            const data = await axios.post("https://temp-bxkn.onrender.com/api/user/login",{rollno,password},config);
            // console.log(data.data.status);
            if(data.data.status===200){
                toast.success("Logged In SuccessFully")
                navigate(`/dashboard/${data.data.userId}`)
            }
            else {
                setLoading(false)
                toast.error("Something went Wront")
                return;
            }

        } catch (error) {
            toast.error("Enter correct Credentials")
            console.log(error);
        }finally{
            setLoading(false)
        }
        // toast.success('Successfully toasted!')
    }
    return (
        <div>
            <ToastContainer />
            {/* <Toaster
                position="top-center"
                reverseOrder={false}
            /> */}
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full text-center sm:max-w-sm">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="email" className="flex items-start text-sm font-medium leading-6 text-gray-900">
                                Registeration No:
                            </label>
                            <div className="mt-2">
                                <input
                                    disabled={loading}
                                    id="email"
                                    name="email"
                                    type="text"
                                    onChange={(e) => setRollno(e.target.value.toUpperCase())}
                                    // autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                disabled={loading}
                                    id="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset px-1 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={(e) => onSubmit(e)}
                                disabled={loading}
                                type="button"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
