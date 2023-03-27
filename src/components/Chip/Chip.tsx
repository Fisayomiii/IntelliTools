import Card from "../Cards/Card";

function Chip() {
    return (
        <>
            <div className="relative rounded-xl overflow-auto web">
                <div className="max-w-xl w-full mx-auto min-w-0 dark:highlight-white/5">
                    <div className="overflow-x-auto flex">

                        <div className="cursor-pointer flex justify-center items-center m-1 font-medium py-3 px-8 rounded-full text-slate-900 border border-slate-900 dark:text-slate-50 dark:border-zinc-500 hover:bg-zinc-100 hover:dark:bg-zinc-800">
                            <div className=" text-base font-semibold leading-7 shadow-sm ">
                                Hello!</div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Card/>

        </>
    )
};

export default Chip;
