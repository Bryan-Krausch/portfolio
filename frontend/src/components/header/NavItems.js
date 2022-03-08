import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faCode, faFile } from '@fortawesome/free-solid-svg-icons'

export default function NavItems(){
    return(
        <ul className="flex text-sm text-ligthGreyText pr-4 tracking-wide">
            <li className="px-3 flex items-baseline group">
                <FontAwesomeIcon icon={faHouse} className='text-[12px] pr-1.5 text-lightPurple' />
                <span className='group-hover:text-lightPurple font-mono'>Accueil</span>
            </li>

            <li className="px-3 flex items-baseline group">
                <FontAwesomeIcon icon={faUser} className='text-[12px] pr-1.5 text-lightPurple' />
                <span className='group-hover:text-lightPurple font-mono'>Présentation</span>
            </li>

            <li className="px-3 flex items-baseline group">
                <FontAwesomeIcon icon={faCode} className='text-[12px] pr-1.5 text-lightPurple' />
                <span className='group-hover:text-lightPurple font-mono'>Technologies</span>
            </li>

            <li className="px-3 flex items-baseline group">
                <FontAwesomeIcon icon={faFile} className='text-[12px] pr-1.5 text-lightPurple' />
                <span className='group-hover:text-lightPurple font-mono'>Projets</span>
            </li>
        </ul>

    )
}