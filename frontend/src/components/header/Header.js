import NavItems from './NavItems'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header(){
    return(
        <header className=" w-[93%] h-[70px] fixed top-0 flex items-center drop-shadow-2xl">

            <div id="headerTitle" className="text-white text-sm lg:text-xl font-medium flex items-baseline w-[10%] group">
                <h1 className="tracking-wide lg:group-hover:text-2xl">Krausch</h1>
                <div className="bg-lightPurple h-1.5 w-1.5 md:ml-1 lg:ml-0.5 rounded-full"></div>
            </div>

            <nav className="lg:flex text-white w-[90%] justify-end items-baseline hidden">
                <NavItems />

                <button className="text-base text-lightPurple border-[0.5px] border-lightPurple rounded p-2 px-4 
                hover:bg-lightPurple hover:bg-opacity-20 ">
                    Me contacter
                </button>
            </nav>

            <nav className='lg:hidden flex absolute right-2'>
                <FontAwesomeIcon icon={faBars} className="text-white" />
            </nav>

        </header>
    )
}