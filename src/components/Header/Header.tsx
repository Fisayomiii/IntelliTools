import Logo from "../../assets/Images/text.png";
import DarkModeToggle from "../../darkmode/Darkmode";
import { motion } from "framer-motion";

function Header() {
  return (
    <>
      <header className="backdrop-filter backdrop-blur-lg fixed top-4 left-4 right-4 sm:left-64 sm:right-64 z-50 rounded-lg shadow-lg transition-all border border-slate-500 hover:border-slate-600">
        <nav className="flex justify-between items-center py-2 px-6">
          <div className="flex items-center" title="Intellitools">
            <motion.a initial="hidden" animate="visible" variants={{
              hidden: {
                scale: .8,
                opacity: 0
              },
              visible: {
                scale: .9,
                opacity: 1,
                transition: {
                  delay: 1
                }
              }
            }} href="#" className="text-gray-900 font-medium text-lg mr-8">
              <img src={Logo} alt="Logo" className="h-12" />
            </motion.a>
          </div>
          <div className="flex items-center justify-center">

            <motion.button initial="hidden" animate="visible" variants={{
              hidden: {
                // scale: .8,
                opacity: 0
              },
              visible: {
                // scale: .9,
                opacity: 1,
                transition: {
                  delay: 1
                }
              }
            }} className="animate__animated animate__fadeInUp text-gray-900 font-medium rounded-full">
              <DarkModeToggle />
            </motion.button>

            <motion.button initial="hidden" animate="visible" variants={{
              hidden: {
                // scale: .8,
                opacity: 0
              },
              visible: {
                // scale: .9,
                opacity: 1,
                transition: {
                  delay: 1.3
                }
              }
            }} className="transition-all text-gray-900 font-medium py-2 px-4 rounded-full" title="Star on Github 🙏">
              <a href="https://github.com/Fisayomiii/Intellitools" target="_blank" rel="noreferrer" className="block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
                <i className="bx bxl-github bx-sm"></i>
              </a>
            </motion.button>

            <motion.button initial="hidden" animate="visible" variants={{
              hidden: {
                // scale: .8,
                opacity: 0
              },
              visible: {
                // scale: .9,
                opacity: 1,
                transition: {
                  delay: 1.6
                }
              }
            }} className="transition-all text-gray-900 font-medium rounded-full" title="Give me a follow">
              <a href="https://twitter.com/999tweets_her" target="_blank" rel="noreferrer" className="block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
                <i className="bx bxl-twitter bx-sm"></i>
              </a>
            </motion.button>
          </div>

        </nav>
      </header>
    </>
  )
};

export default Header;
