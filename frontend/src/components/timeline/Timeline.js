import TimelineItems from "./TimelineItems";
import { faCode, faFile, faHouse, faUser} from '@fortawesome/free-solid-svg-icons'

export default function Timeline({diapo}){
    return(
        <div className="hidden tablet:hidden lg:flex h-[20%] w-[95%] mx-auto items-end justify-start pb-2 absolute bottom-2 left-2/4 transform -translate-x-2/4 ">
            <ol class="flex items-center justify-center w-full sm:flex">

                <TimelineItems title='Accueil' description="Une courte présentation de moi même." icon={faHouse} isAchieved={diapo > 1 && true}/>
                <TimelineItems title='Présentation' description="Une présentation plus appronfondie qui présente mon parcours..." icon={faUser} isAchieved={diapo > 2 && true}/>
                <TimelineItems title='Technologies' description="Voir les technologies que je maitrise actuellement." icon={faCode} isAchieved={diapo > 3 && true}/>
                <TimelineItems title='Projets' description="Ce sont les projets que j'ai des réalisé" icon={faFile} isAchieved={diapo > 4 && true}/>

            </ol>
        </div>
    )

}