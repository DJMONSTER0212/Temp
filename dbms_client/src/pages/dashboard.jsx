import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import Result from '../components/Result';
import axios from 'axios';
const Dashboard = () => {
    const params = useParams();
    // const {userId} =
    const [cuser,setCuser] = useState("");
    const [count, setCount] = useState(0);
    // const [name, setName] = useState('John');
    const [results,setResults] = useState([])
    const f = async () => {
        toast.success("Logged in Successfully");
        try {
            const user = await axios.get(`https://temp-bxkn.onrender.com/api/user/${params.userId}`);
            setCuser(user.data);
            const cresult = await axios.get(`https://temp-bxkn.onrender.com/api/results/${params.userId}`);
            console.log(cresult.data)
            setResults(cresult.data);
            // console.log(cuser)
            console.log(user.data)
        } catch (error) {

        }
    }
    useEffect(() => {
        f()
    }, [count])
    return (
        <div>
            <ToastContainer />
            <header>
                <div className="mx-auto max-w-screen-xl ">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="text-center sm:text-left">
                            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                                Welcome, {cuser?.firstName + cuser?.lastName}!
                            </h1>
                        </div>


                    </div>
                </div>
            </header>
            {/* {params.userId} */}
            <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                {/* results.map() */}
                {results.map((result)=>(<Result result={result}/>))}
            </div>
        </div>
    )
}

export default Dashboard
