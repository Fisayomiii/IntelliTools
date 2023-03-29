import Logo from "../../assets/Images/text.png";
import DarkModeToggle from "../../darkmode/Darkmode";

function Header() {
  return (
    <>
      <header className="backdrop-filter backdrop-blur-lg fixed top-7 left-4 right-4 sm:left-64 sm:right-64 z-50 rounded-lg shadow-lg transition-all border border-slate-500 hover:border-slate-600">
        <nav className="flex justify-between items-center py-3 px-6">
          <div className="flex items-center" title="Intellitools">
            <a href="#" className="text-gray-900 font-medium text-lg mr-8">
              <img src={Logo} alt="Logo" className="h-12" />
            </a>
          </div>
          <div className="flex items-center justify-center">

            <button className="text-gray-900 font-medium rounded-full">
              <DarkModeToggle />
            </button>

            <button className="text-gray-900 font-medium py-2 px-4 rounded-full" title="Star on Github 🙏">
              <a href="https://github.com/Fisayomiii/Intellitools" target="_blank" rel="noreferrer" className="block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
                <i className="bx bxl-github bx-sm"></i>
              </a>
            </button>

            <button className="text-gray-900 font-medium rounded-full" title="Give me a follow">
              <a href="https://twitter.com/999tweets_her" target="_blank" rel="noreferrer" className="block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
                <i className="bx bxl-twitter bx-sm"></i>
              </a>
            </button>
          </div>

        </nav>
      </header>
    </>
  )
};

export default Header;
