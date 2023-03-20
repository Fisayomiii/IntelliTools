function Footer() {
    return (
        <>
            <footer >
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mt-8 border-t border-gray-400 pt-8">
                        <div className="sm:flex gap-96 justify-center items-center">
                            <p className="text-xs text-gray-500 flex justify-start gap-6 lg:col-span-5 justify-center items-center lg:justify-end">
                                &copy; 2023. Intellitools. All rights reserved.
                            </p>

                            <div className="lg:flex lg:items-start lg:gap-8 mt-5">
                                <div className="text-slate-600">
                                    <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 justify-center items-center lg:justify-end" >

                                        <li>
                                            <a href="https://www.instagram.com/fisayomithesedays/" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75" >
                                                <span className="sr-only">Instagram</span>
                                                <i className='bx bxl-instagram-alt bx-sm'></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://twitter.com/999tweets_her" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75" >
                                                <span className="sr-only">Twitter</span>
                                                <i className='bx bxl-twitter bx-sm' ></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/" rel="noreferrer" target="_blank"className="text-gray-700 transition hover:opacity-75" >
                                                <span className="sr-only">GitHub</span>
                                                <i className='bx bxl-github bx-sm' ></i>
                                            </a>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer