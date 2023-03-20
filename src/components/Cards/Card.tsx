function Card() {
    const components = [
        {
            img: "https://merakiui.com/images/components/thumbnails/alerts.webp",
            alt: "Alerts img",
            linkto: "/components/alerts",
            name: "Alerts",
            components: "6 components"
        },
        {
            img: "https://merakiui.com/images/components/thumbnails/buttons.webp",
            alt: "Buttons img",
            linkto: "/components/buttons",
            name: "Buttons",
            components: "9 components"
        },
        {
            img: "https://merakiui.com/images/components/thumbnails/breadcrumbs.webp",
            alt: "Breadcrumbs img",
            linkto: "/components/breadcrumbs",
            name: "Breadcrumbs",
            components: "3 components"
        },
    ];
    return (
        <>
            <div className="min-h-screen flex justify-center items-center py-20">
                <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">

                    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg dark:bg-zinc-800">

                        <div className="relative">
                            <img className="object-cover rounded-xl h-64 w-full" src="https://via.placeholder.com/450x450" alt="Colors" />
                            <p className="absolute top-5 right-5 bg-[#B2B2B2] text-gray-800 font-semibold p-2 rounded-full">FREE</p>
                        </div>
                        <div className="mt-4 mb-5">
                            <a href="#">
                                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            </a>
                            <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <a href="#" className="text-white bg-gradient-to-r from-pink-500 to-yellow-500 to-blue-500 text-transparent focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" title="Visit Website">
                                <i className="bx bx-left-top-arrow-circle bx-rotate-90 bx-sm" ></i>
                            </a>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg dark:bg-zinc-800">

                        <div className="relative">
                            <img className="object-cover rounded-xl h-64 w-full" src="https://via.placeholder.com/450x450" alt="Colors" />
                            <p className="absolute top-5 right-5 bg-[#B2B2B2] text-gray-800 font-semibold p-2 rounded-full">FREE</p>
                        </div>
                        <div className="mt-4 mb-5">
                            <a href="#">
                                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            </a>
                            <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <a href="#" className="text-white bg-gradient-to-r from-pink-500 to-yellow-500 to-blue-500 text-transparent focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" title="Visit Website">
                                <i className="bx bx-left-top-arrow-circle bx-rotate-90 bx-sm" ></i>
                            </a>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg dark:bg-zinc-800">

                        <div className="relative">
                            <img className="object-cover rounded-xl h-64 w-full" src="https://via.placeholder.com/450x450" alt="Colors" />
                            <p className="absolute top-5 right-5 bg-[#B2B2B2] text-gray-800 font-semibold p-2 rounded-full">FREE</p>
                        </div>
                        <div className="mt-4 mb-5">
                            <a href="#">
                                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            </a>
                            <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <a href="#" className="text-white bg-gradient-to-r from-pink-500 to-yellow-500 to-blue-500 text-transparent focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" title="Visit Website">
                                <i className="bx bx-left-top-arrow-circle bx-rotate-90 bx-sm" ></i>
                            </a>
                        </div>
                    </div>


                </div>
            </div>


        </>
    )
}

export default Card