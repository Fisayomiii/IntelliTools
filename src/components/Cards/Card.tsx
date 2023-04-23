import { motion } from "framer-motion";

const Card = ({ tool }: any) => {
    return (
        <>
            <motion.div layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0, y: 90 }}
                exit={{ opacity: 0 }}
                whileInView={{ y: 5 }}
                viewport={{ once: true }} className="max-w-sm max-h-fit bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg dark:bg-zinc-800">
                <div className="relative overflow-hidden group rounded-xl">
                    <img className="object-cover rounded-xl h-64 w-full transition duration-500 ease-in-out transform group-hover:scale-105" src={tool.image} alt={tool.name + " banner image"} />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>

                    <p className="absolute top-5 right-5 bg-[#B2B2B2] text-gray-800 font-semibold p-2 rounded-full">{tool.type}</p>
                </div>
                <div className="mt-4 mb-5">
                    <a href={tool.website} rel="noreferrer" target="_blank">
                        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{tool.name}</h5>
                    </a>
                    <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{tool.description}</p>
                    <div className="rounded-lg bg-primary text-slate-900 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal dark:text-gray-200">
                        {tool.category}
                    </div>
                    <motion.a whileTap={{ scale: 0.5 }} href={tool.website} rel="noreferrer" target="_blank" className="text-white bg-gradient-to-r from-pink-500 to-yellow-500 to-blue-500 text-transparent focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:focus:ring-pink-300" title="Visit Website">
                        <i className="bx bx-left-top-arrow-circle bx-rotate-90 bx-sm" ></i>
                    </motion.a>
                </div>
            </motion.div>
        </>
    )
};

export default Card;
