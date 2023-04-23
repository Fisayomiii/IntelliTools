import React, { useState } from "react";
import Card from "../Cards/Card";
import AitoolsData from '../../data/Tools.json';
import { motion, AnimatePresence } from "framer-motion";

const Chip: React.FC = () => {
    const categoryData: string[] = ["All", "Code", "Productivity", "Chatbots", "Generative Art", "AI Detectors", "Video Creation", "Music", "Writing", "Finance", "Fun", "Food"];
    const { tools } = AitoolsData;
    const [onDisplay, setOnDisplay] = useState(tools);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState("");

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
        setIsLoading(true);
        setOnDisplay(
            tools.filter((tool) =>
                tool.name.toLowerCase().includes(event.target.value.toLowerCase())
            )
        );
        setIsLoading(false);
    };

    const handleCategory = (tag: string) => {
        setIsLoading(true);
        if (tag === "All") {
            setOnDisplay(tools);
            setSearch("");
        } else {
            setOnDisplay(tools.filter((tool) => tool.category === tag));
            setSearch("");
        }
        setIsLoading(false);
    };

    return (
        <>
            <div className="relative rounded-xl overflow-auto web mt-20 sm:mt-1">
                <div className="max-w-xl w-full-xl mx-auto min-w-0 dark:highlight-white/5">
                    <motion.div
                        className="overflow-x-auto flex"
                    >
                        {categoryData.map((tab: string) => {
                            return (
                                <div
                                    className="cursor-pointer flex justify-center items-center m-1 font-medium py-0 px-8 text-center rounded-lg text-slate-900 border border-slate-900 dark:text-slate-50 dark:border-zinc-500 hover:bg-zinc-100 hover:dark:bg-zinc-800"
                                    key={tab}
                                    onClick={() => handleCategory(tab)}
                                >
                                    {tab}
                                </div>
                            );
                        })}
                    </motion.div>
                    <div className="relative mt-6 mb-8">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="text" value={search} onChange={handleSearch} className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-900 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:bg-zinc-800 dark:text-white " placeholder="Search For a tool" />
                        <button type="submit" disabled className="text-white absolute right-2.5 bottom-2.5 bg-gradient-to-r from-pink-500 to-yellow-500 to-blue-500 text-transparent focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </div>
            </div>
            <div className="min-h-screen flex justify-center items-center py-20">
                {isLoading ? (
                    <p className="text-red-700">Loading...</p>
                ) : onDisplay.length === 0 ? (
                    <p className="text-red-700 text-center text-2xl p-7">Tool Not Found <br /> Looks like the Intellitools Team has not added the tool you search for yet</p>
                ) : (
                    <motion.div
                        layout
                        className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0"
                    >
                        <AnimatePresence>
                            {onDisplay.map((tool) => {
                                return <Card tool={tool} key={tool.image} />;
                            })}
                        </AnimatePresence>
                    </motion.div>
                )}
            </div>
        </>
    );
};

export default Chip;