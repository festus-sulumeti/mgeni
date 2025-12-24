import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
     
        <header className="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full before:absolute before:inset-0 before:max-w-5xl before:mx-2 lg:before:mx-auto before:rounded-[26px] before:bg-neutral-800/30 before:backdrop-blur-md">
        <nav className="relative max-w-5xl w-full flex flex-wrap md:flex-nowrap basis-full items-center justify-between py-2 ps-5 pe-2 md:py-0 mx-2 lg:mx-auto">
            <div className="flex items-center">
                <a className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80" href="#" aria-label="Mgeni">
                    <svg className="w-28 h-auto" viewBox="0 0 116 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="24" className="text-white font-bold text-lg">Mgeni</text>
                    </svg>
                </a>

                <div className="ms-1 sm:ms-2">

                </div>
            </div>


            <div className="md:order-3 flex items-center gap-x-3">
            <div className="md:ps-3">
                <Link to="/signin" className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-nowrap text-neutral-800 rounded-full focus:outline-hidden">
                  Book Now
                </Link>
            </div>

            <div className="md:hidden">
                <button type="button" className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-full bg-neutral-800 text-white disabled:opacity-50 disabled:pointer-events-none" id="hs-navbar-floating-dark-collapse" aria-expanded="false" aria-controls="hs-navbar-floating-dark" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-floating-dark">
                <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            </div>
            </div>
        
            <div id="hs-navbar-floating-dark" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block" aria-labelledby="hs-navbar-floating-dark-collapse">
            <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-y-3 py-2 md:py-0 md:ps-7">
                <Link to="/" className="pe-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-hidden focus:text-neutral-300" aria-current="page">Home</Link>
                <a className="pe-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-hidden focus:text-neutral-300" href="#">Stories</a>
                <a className="pe-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-hidden focus:text-neutral-300" href="#">Reviews</a>
                <a className="pe-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-hidden focus:text-neutral-300" href="#">Approach</a>

                
                <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] [--auto-close:inside] md:inline-block">
                
                
                </div>
                
            </div>
            </div>
        
        </nav>
        </header>

    </>
  )
}

export default Navbar