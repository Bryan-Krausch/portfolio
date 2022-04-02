import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faCode, faFile } from '@fortawesome/free-solid-svg-icons'

export default function NavItems({setDiapo, setIsOpenPDF}){
    return(
        <ul className="flex text-sm text-ligthGreyText pr-4 tracking-wide">
            <li className="px-3 flex items-baseline group cursor-pointer" onClick={() => {
                setDiapo(1)
                setIsOpenPDF(false)
            }}>
                <FontAwesomeIcon icon={faHouse} className='text-[12px] pr-1.5 text-lightPurple' />
                <span className='group-hover:text-lightPurple font-mono'>Accueil</span>
            </li>

            <li className="px-3 flex items-baseline group cursor-pointer" onClick={() => {
                setDiapo(2)
                setIsOpenPDF(false)    
            }}>
                <FontAwesomeIcon icon={faUser} className='text-[12px] pr-1.5 text-lightPurple' />
                <span className='group-hover:text-lightPurple font-mono'>Présentation</span>
            </li>

            <li className="px-3 flex items-baseline group cursor-pointer" onClick={() => {
                setDiapo(3)
                setIsOpenPDF(false)
            }}>
                <FontAwesomeIcon icon={faCode} className='text-[12px] pr-1.5 text-lightPurple' />
                <span className='group-hover:text-lightPurple font-mono'>Compétences</span>
            </li>

            <li className="px-3 flex items-baseline group cursor-pointer" onClick={() => {
                setDiapo(4)
                setIsOpenPDF(false)
            }}>
                <FontAwesomeIcon icon={faFile} className='text-[12px] pr-1.5 text-lightPurple' />
                <span className='group-hover:text-lightPurple font-mono'>Projets</span>
            </li>
        </ul>

    )
}