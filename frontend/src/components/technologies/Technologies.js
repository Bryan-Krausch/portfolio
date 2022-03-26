import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode, faUser } from "@fortawesome/free-solid-svg-icons"
import TechnologiesMenu from "./TechnologiesMenu"
import TechnologiesContent from "./TechnologiesContent"
import {useState} from 'react'

export default function Technologies(){
    const [selected, setSelected] = useState(1)

    return (
        <section className="h-full w-full flex justify-center items-center mt-[50px] 2xl:mt-[100px] relative">
            <div className=" w-full lg:w-[65%] h-[100%]  space-y-8 animate-revealCompetences">

                <div className="w-full flex items-center text-white text-xl h-[10%]">
                    <FontAwesomeIcon  icon={faCode} className="text-lightPurple pr-4"/>
                    <h3>Compétences que je maitrise</h3>
                </div>

                <div className="w-full h-[90%] flex lg:flex-row flex-col space-y-4 lg:space-y-0">
                    <TechnologiesMenu selected={selected} setSelected={setSelected}/>

                    <TechnologiesContent selected={selected}/>
                </div>

            </div>
        </section>
    )
}