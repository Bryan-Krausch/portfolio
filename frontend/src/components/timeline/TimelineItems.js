import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

export default function TimelineItems({title, description, icon, isAchieved}){

    useEffect(() => {
        
    })

    return(
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
            <div class="flex z-10 justify-center items-center w-8 h-8 bg-lightPurple rounded-full ring-0 ring-whiteshrink-0">
                <FontAwesomeIcon icon={icon} className="text-mediumPurple"/>
            </div>
            <div class={`hidden sm:flex w-full ${isAchieved ? 'bg-lightPurple' : ' bg-gray-700'} h-0.5 dark:bg-${isAchieved ? 'bg-lightPurple' : ' bg-gray-700'}`}></div>
        </div>
        <div class="mt-3 sm:pr-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-lightPurple">{title}</h3>
            <p class="text-base font-normal text-gray-500 dark:text-white">{description}</p>
        </div>
    </li>

    )
}

