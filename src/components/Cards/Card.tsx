function Card() {
    const components = [
        {
            img: "https://supertools.therundown.ai/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2F9b1db7dc-155d-4da6-bf88-a68ad1c2af0f%2Fimages%2F420820c3-fc79-493e-9793-185e94f76081.png&w=1920&q=80",
            alt: "Mememorph",
            trial: "FREE",
            name: "Mememorph",
            desc: "You can turn yourself into your favorite memes simply by uploading a few selfies."
        },
        {
            img: "https://supertools.therundown.ai/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2F9b1db7dc-155d-4da6-bf88-a68ad1c2af0f%2Fimages%2F5866072b-2e83-4406-b116-a3068ffd08fe.png&w=1920&q=80",
            alt: "Looka",
            trial: "Paid",
            name: "Looka",
            desc: "Looka is a tool that helps you Design your brand identity from scratch in seconds."
        },
        {
            img: "https://supertools.therundown.ai/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2F9b1db7dc-155d-4da6-bf88-a68ad1c2af0f%2Fimages%2F150ce778-99c5-410a-ba8b-5b3a6984bac8.png&w=1920&q=80",
            alt: "Magic Studio",
            trial: "Paid",
            name: "Magic Studio",
            desc: "Magic Studio is An AI-powered platform that enables users to ."
        },
    ];
    return (
        <>
            <div className="min-h-screen flex justify-center items-center py-20">
                <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">

                    {components.map((item, i) => (
                        <div className="max-w-sm max-h-fit bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg dark:bg-zinc-800" key={i}>

                            <div className="relative overflow-hidden group rounded-xl">
                                <img className="object-cover rounded-xl h-64 w-full transition duration-500 ease-in-out transform group-hover:scale-105" src={item.img} alt={item.alt} />
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>

                                <p className="absolute top-5 right-5 bg-[#B2B2B2] text-gray-800 font-semibold p-2 rounded-full">{item.trial}</p>
                            </div>
                            <div className="mt-4 mb-5">
                                <a href="#">
                                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{item.name}</h5>
                                </a>
                                <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{item.desc}</p>
                                <a href="#" className="text-white bg-gradient-to-r from-pink-500 to-yellow-500 to-blue-500 text-transparent focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" title="Visit Website">
                                    <i className="bx bx-left-top-arrow-circle bx-rotate-90 bx-sm" ></i>
                                </a>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </>
    )
};

export default Card;
