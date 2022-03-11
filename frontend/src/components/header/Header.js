import NavItems from './NavItems'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCross, faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Header({isOpenMenuModal, setIsOpenMenuModal, setDiapo}){
    const stateBars = isOpenMenuModal && "hidden"

    return(
        <header className={`w-[93%] h-[70px] fixed top-0 flex items-center justify-between drop-shadow-2xl z-[10]`}>
                <div id="headerTitle" className="text-white text-base md:text-lg lg:text-xl font-medium flex items-baseline xl:w-[10%] group">
                    <h1 className="tracking-wide lg:group-hover:text-2xl">Krausch</h1>
                    <div className="bg-lightPurple h-1.5 w-1.5 ml-1 lg:ml-0.5 rounded-full"></div>
                </div>

                <nav className="lg:flex text-white lg:w-[90%] justify-end items-baseline hidden">
                    <NavItems setDiapo={setDiapo}/>

                    <button className="text-base text-lightPurple border-[0.5px] border-lightPurple rounded p-2 px-4 
                    hover:bg-lightPurple hover:bg-opacity-20 ">
                        Me contacter
                    </button>
                </nav>

                <nav className={`lg:hidden pr-4 text-red-500 ${stateBars}`}>
                    {!isOpenMenuModal && 
                        <button  onClick={() => {setIsOpenMenuModal(true)}} >
                            <FontAwesomeIcon icon={faBars} className="text-white" />
                        </button>
                    }
                </nav>
        </header>
    )
}