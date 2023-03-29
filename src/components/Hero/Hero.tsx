import Chip from "../Chip/Chip"
import Footer from "../Footer/Footer"

function Hero() {
    return (
        <>
            <div className="relative isolate px-6 lg:px-8 mb-44">
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center mt-20 sm:mt-5">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl gradient-underline medium-line dark:text-slate-50">Intellitools
                        </h1>
                        <p className="mt-6 font-semibold text-xl leading-8 text-gray-600">Revolutionize Your Workflows with the Best <span className="font-bold bg-gradient-to-r from-pink-500 to-yellow-500 to-blue-500 text-transparent bg-clip-text"> Ai Tools</span> 🤖 at Your Fingertips</p>
                        {/* <div className="mt-5 flex items-center justify-center gap-x-6">
                            <a className="rounded-md bg-gradient-to-r from-pink-500 to-yellow-500 to-blue-500 text-transparent px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm " href="#filter">Get Started!</a>
                        </div> */}
                    </div>
                </div>

                <div className="mouse_scroll"></div>
            </div>


            <Chip />
            <Footer />
        </>
    )
};

export default Hero;
