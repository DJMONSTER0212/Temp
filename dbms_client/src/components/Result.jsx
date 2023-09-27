import React from 'react'

const Result = () => {
    return (
        <article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
            <div className="flex flex-row justify-between items-center gap-4">
                <div className=''>
                    <h3 className="text-2xl font-medium text-white">Mid Sem</h3>


                </div>
                <div className='items-end text'>
                    {"PASS"?(<span
                            className="whitespace-nowrap mx-2 rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700 dark:bg-purple-700 dark:text-purple-100"
                        >
                            PASS
                        </span>):(<span
                            className="whitespace-nowrap mx-2 rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700 dark:bg-red-700 dark:text-purple-100"
                        >
                            FAIL
                        </span>)}

                    </div>
            </div>

            <ul className="mt-4 space-y-2">
                <li>
                    <p
                        // href="#"
                        className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
                    >
                        <strong className="font-medium text-white">Maths</strong>

                        <p className="mt-1 text-xs font-medium text-gray-300">
                            90
                        </p>
                    </p>
                </li>

                <li>
                    <p
                        // href="#"
                        className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
                    >
                        <strong className="font-medium text-white">Physics</strong>

                        <p className="mt-1 text-xs font-medium text-gray-300">
                            90
                        </p>
                    </p>
                </li>
                <li>
                    <p
                        // href="#"
                        className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
                    >
                        <strong className="font-medium text-white">English</strong>

                        <p className="mt-1 text-xs font-medium text-gray-300">
                            89
                        </p>
                    </p>
                </li>
                <li>
                    <p
                        // href="#"
                        className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
                    >
                        <strong className="font-medium text-white">CS</strong>

                        <p className="mt-1 text-xs font-medium text-gray-300">
                            90
                        </p>
                    </p>
                </li>
                <li>
                    <p
                        // href="#"
                        className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
                    >
                        <strong className="font-medium text-white">Chemistry</strong>

                        <p className="mt-1 text-xs font-medium text-gray-300">
                            91
                        </p>
                    </p>
                </li>
            </ul>
        </article>
    )
}

export default Result
