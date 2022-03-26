import TechnologiesMenuItems from "./TechnologiesMenuItems";

export default function TechnologiesMenu({selected, setSelected}){


    return (
        <div className="flex lg:h-full space-x-6 lg:w-[30%] w-full">
            <ul className="text-ligthGreyText w-full flex-col space-y-2 lg:space-y-0">
                <div className="lg:flex-col flex space-x-4 lg:space-x-0">
                    <TechnologiesMenuItems itemNumber={1} itemNumberSelected={selected} setSelected={setSelected} itemName="Langages"/>
                    <TechnologiesMenuItems itemNumber={2} itemNumberSelected={selected} setSelected={setSelected} itemName="Développement Web"/>
                </div>
                <div className="lg:flex-col flex space-x-4 lg:space-x-0">
                    <TechnologiesMenuItems itemNumber={3} itemNumberSelected={selected} setSelected={setSelected} itemName="Cybersécurité"/>
                    <TechnologiesMenuItems itemNumber={4} itemNumberSelected={selected} setSelected={setSelected} itemName="Autres"/>
                </div>
            </ul>
        </div>
    )
}