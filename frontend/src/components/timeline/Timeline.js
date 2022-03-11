import TimelineItems from "./TimelineItems";
import { faCode, faFile, faHouse, faUser} from '@fortawesome/free-solid-svg-icons'

export default function Timeline({diapo}){
    return(
        <div className="absolute bottom-10 hidden lg:block">
            <ol class="items-center sm:flex">

                <TimelineItems title='Accueil' description="Une courte présentation de moi même." icon={faHouse} isAchieved={diapo >= 1 && true}/>
                <TimelineItems title='Présentation' description="Une présentation plus appronfondie qui présente mon parcours..." icon={faUser} isAchieved={diapo >= 2 && true}/>
                <TimelineItems title='Technologies' description="Voir les technologies que je maitrise actuellement." icon={faCode} isAchieved={diapo >= 3 && true}/>
                <TimelineItems title='Projets' description="Ce sont les projets que j'ai des réalisé" icon={faFile} isAchieved={diapo >= 4 && true}/>

            </ol>
        </div>
    )

}