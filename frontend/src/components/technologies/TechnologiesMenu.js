import TechnologiesMenuItems from "./TechnologiesMenuItems";

export default function TechnologiesMenu({selected, setSelected}){
    console.log('====================================');
    console.log(selected);
    console.log('====================================');
    return (
        <div className="flex h-full space-x-6 w-[30%]">
            <ul className="text-ligthGreyText w-full">
                <TechnologiesMenuItems itemNumber={1} itemNumberSelected={selected} setSelected={setSelected} itemName="Langages"/>
                <TechnologiesMenuItems itemNumber={2} itemNumberSelected={selected} setSelected={setSelected} itemName="Développement Web"/>
                <TechnologiesMenuItems itemNumber={3} itemNumberSelected={selected} setSelected={setSelected} itemName="Cybersécurité"/>
                <TechnologiesMenuItems itemNumber={4} itemNumberSelected={selected} setSelected={setSelected} itemName="Autres"/>
            </ul>
        </div>
    )
}