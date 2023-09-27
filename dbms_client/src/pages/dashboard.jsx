import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import Result from '../components/Result';

const Dashboard = () => {
    // const {userId} =
    const [count, setCount] = useState(0);
    const [name, setName] = useState('John');
    const f = async () => {
        toast.success("Logged in Successfully");
    }
    useEffect(() => {
        f()
    }, [count])
    const params = useParams();
    return (
        <div>
            <ToastContainer />
            <header>
                <div className="mx-auto max-w-screen-xl ">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="text-center sm:text-left">
                            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                                Welcome Back, Barry!
                            </h1>
                        </div>


                    </div>
                </div>
            </header>
            {/* {params.userId} */}
            <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                <Result />
                <Result />
                <Result />
                <Result />
                <Result />
            </div>
        </div>
    )
}

export default Dashboard
