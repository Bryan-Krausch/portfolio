import { faCode, faFile, faHouse, faUser, faXmark} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './menu.css'

export default function ModalMenu({isOpenMenuModal, setIsOpenMenuModal, setDiapo}) {
    const stateMenu = isOpenMenuModal ? 'translate-x-0' : 'translate-x-full'
    function changeDiapoMenu(diapo){
        setDiapo(diapo);
        setIsOpenMenuModal(false)
    }

    return(
        <div className={`z-[49] w-[64%] md:w-[50%] h-screen right-0 lg:hidden bg-mediumPurple drop-shadow-2xl shadow-2xl 
        shadow-black flex fixed justify-center items-center overflow-y-hidden ${stateMenu} z-[200] ease-in-out duration-300`}>
            
            <div className='lg:hidden absolute right-8 top-6 text-red-500 cursor-pointer z-[200]'>
                {isOpenMenuModal &&  
                    <button onClick={() => {setIsOpenMenuModal(false)}} className="relative cursor-pointer">
                        <FontAwesomeIcon icon={faXmark} className="text-white text-xl relative cursor-pointer" />
                    </button>
                }
            </div>

            <div className="h-[50%] w-full flex justify-center items-center">
                <nav className="h-full">
                    <ul className="h-full flex flex-col justify-around items-center text-ligthGreyText font-mono text-base md:text-lg tracking-wide">
                        <div className="flex flex-col items-center space-y-4" onClick={() => {changeDiapoMenu(1)}} >
                            <FontAwesomeIcon icon={faHouse} className="text-lightPurple"/>
                            <li>Accueil</li>
                        </div>

                        <div className="flex flex-col items-center space-y-4" onClick={() => {changeDiapoMenu(2)}} >
                            <FontAwesomeIcon icon={faUser} className="text-lightPurple"/>
                            <li>Présentation</li>
                        </div>

                        <div className="flex flex-col items-center space-y-4" onClick={() => {changeDiapoMenu(3)}} >
                        <FontAwesomeIcon icon={faCode} className="text-lightPurple"/>
                            <li>Compétences</li>
                        </div>

                        <div className="flex flex-col items-center space-y-4" onClick={() => {changeDiapoMenu(4)}} >
                            <FontAwesomeIcon icon={faFile} className="text-lightPurple"/>
                            <li>Projets</li>
                        </div>
                    </ul>
                </nav>
            </div>
            
            <div className="absolute bottom-0 h-[10%] w-full flex justify-center items-center shadow-2xl">
                <button className="h-[50%] w-[60%] border-2 border-lightPurple text-sm text-white rounded">
                    Me contacter
                </button>
            </div>
        </div>
    )

}