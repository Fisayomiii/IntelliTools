import Card from "../Cards/Card";
import { useState } from 'react';
import AitoolsData from '../../data/Tools.json';
import { motion, AnimatePresence } from "framer-motion";

function Chip() {
    const categoryData: string[] = ["All", "Generative Art", "AI Detectors", "Chatbots", "Music", "Writing", "Finance", "Fun", "Food"];
    const [category, setCategory] = useState<string>("All");
    const { tools } = AitoolsData;
    const [onDisplay, setOnDisplay] = useState(tools);

    const handleCategory = (tag: string) => {
        setCategory(tag);
        if (tag === "All") {
            setOnDisplay(tools);
            return;
        }
        setOnDisplay(tools.filter((tool) => tool.category === tag));
    };

    return (
        <>
            <div className="relative rounded-xl overflow-auto web mt-20 sm:mt-1">
                <div className="max-w-xl w-full mx-auto min-w-0 dark:highlight-white/5">
                    <div className="overflow-x-auto flex">
                        {categoryData.map((tab: string) => {
                            return <div className="cursor-pointer flex justify-center items-center m-1 font-medium py-0 px-8 text-center rounded-lg text-slate-900 border border-slate-900 dark:text-slate-50 dark:border-zinc-500 hover:bg-zinc-100 hover:dark:bg-zinc-800" key={tab} onClick={() => handleCategory(tab)}>
                                <div className=" text-base font-semibold leading-7 shadow-sm ">
                                    {tab}
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>

            <div className="min-h-screen flex justify-center items-center py-20">
                <motion.div layout className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
                    <AnimatePresence>
                        {onDisplay.map((tool) => {
                            return <Card tool={tool} key={tool.image} />
                        })}
                    </AnimatePresence>
                </motion.div>
            </div>
        </>
    )
};

export default Chip;
