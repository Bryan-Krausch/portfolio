export default function TechnologiesMenuItems({itemNumber, itemNumberSelected, setSelected ,itemName}){
    return(
        <li onClick={() => (setSelected(itemNumber))} 
        className={`${itemNumberSelected === itemNumber ? "text-lightPurple border-lightPurple bg-mediumPurple" : "text-ligthGreyText border-greyText"}  
        cursor-pointer border-l-2  px-5 h-16 2xl:h-20 flex items-center 2xl:text-lg`}>
            {itemName}
        </li>
    )
}