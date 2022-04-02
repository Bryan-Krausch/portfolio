import NavItems from './NavItems'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCross, faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Header({isOpenMenuModal, setIsOpenMenuModal, setDiapo, setIsOpenContactModal, setIsOpenPDF}){
    const stateBars = isOpenMenuModal && "hidden"

    return(
        <header className={`bg-darkPurple w-full h-[100px] fixed flex items-center justify-between drop-shadow-2xl z-[10] px-[25px] lg:px-[50px]`}>
                <div id="headerTitle" className="text-white text-base md:text-lg lg:text-xl font-medium flex items-baseline xl:w-[10%] group cursor-pointer" onClick={() => {
                    setDiapo(1)
                    setIsOpenPDF(false)
                }}>
                    <h1 className="tracking-wide lg:group-hover:text-2xl">Krausch</h1>
                    <div className="bg-lightPurple h-1.5 w-1.5 ml-1 lg:ml-0.5 rounded-full"></div>
                </div>

                <nav className="lg:flex text-white lg:w-[90%] justify-end items-baseline hidden">
                    <NavItems setDiapo={setDiapo} setIsOpenPDF={setIsOpenPDF}/>

                    <button className="text-base text-lightPurple border-[0.5px] border-lightPurple rounded p-2 px-4 
                    hover:bg-lightPurple hover:bg-opacity-20 " onClick={() => {setIsOpenContactModal(true)}}>
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