export default function TechnologiesMenuItems({itemNumber, itemNumberSelected, setSelected ,itemName}){
    return(
        <li onClick={() => (setSelected(itemNumber))} 
        className={`${itemNumberSelected === itemNumber ? "text-lightPurple border-lightPurple bg-mediumPurple" : "text-ligthGreyText border-greyText"}  
        cursor-pointer text-base lg:border-l-2 lg:text-base lg:px-5 lg:h-16 2xl:h-20 flex items-center 2xl:text-lg`}>
            {itemName}
        </li>
    )
}