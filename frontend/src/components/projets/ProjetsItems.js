import spotifyProject from "../../img/projet/spotifyProject.png"
import cryptoMonnaieProject from "../../img/projet/cryptoProject.png"
import irealMindProject from "../../img/projet/irealMindProject.png"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export default function ProjetsItems({projectState}){
    console.log(projectState);
    return(
    <React.Fragment>
        <div className={`${projectState !== 1 ? "hidden" : 'block'} flex`}  id="1">

            <div className="w-[70%] 2xl:h-full h-full relative group z-10 flex items-center">
                <div className="relative group">
                    <div className={`w-full h-full bg-mediumPurple absolute top-0 l-0 opacity-40 group-hover:opacity-0 z-[50]`}></div>
                    <img src={spotifyProject} alt="spotify clone illustration" className="w-full h-full rounded z-[10]  object-cover block shadow"/>
                </div>
            </div>
            
            <div className="w-[50%] h-[70%] absolute right-0 z-20 flex items-end">
                <div className="w-full h-[70%] flex flex-col items-end text-white space-y-6">
                    <h3 className="text-lightPurple text-lg font-semibold tracking-wide">Spotify Clone</h3>
                    <div className="bg-mediumPurple w-full lg:h-[60%] xl:h-[45%] text-right text-ligthGreyText flex items-center rounded shadow-xl px-6 py-5">
                        <p className="lg:text-xs 2xl:text-sm">Un copie du célèbre site d'écoute de musique en ligne. Le site est <span className="text-lightPurple">totalement fonctionnelle</span>. Il est possible de se connecter avec son <span className="text-lightPurple">compte Spotify</span> et par
                        la suite écouter de la musique, créer une playlist, supprimer une playlist...
                        </p>
                    </div>
                    <ul className="flex space-x-4 text-greyText xl:text-base text-sm">
                        <li>NextJS</li>
                        <li>PostgresSQL</li>
                        <li>Tailwind</li>
                        <li>SpotifyAPI</li>
                    </ul>
                    <div className="mt-2 space-x-4 text-lg">
                        <FontAwesomeIcon icon={faGithub} />
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </div>
                </div>
            </div>

        </div>

        <div className={`${projectState !== 2 ? "hidden" : 'block'} flex`}  id="1">

            <div className="w-[70%] 2xl:h-full h-full relative group z-10 flex items-center">
                <div className="relative group">
                    <div className={`w-full h-full bg-mediumPurple absolute top-0 l-0 opacity-40 group-hover:opacity-0 z-[50]`}></div>
                    <img src={cryptoMonnaieProject} alt="cryptoMonnaieProject illustration" className="w-full h-full rounded z-[10]  object-cover block shadow"/>
                </div>
            </div>
            
            <div className="w-[50%] h-[70%] absolute right-0 z-20 flex items-end">
                <div className="w-full h-[70%] flex flex-col items-end text-white space-y-6">
                    <h3 className="text-lightPurple text-lg font-semibold tracking-wide">Site de Crypto Monnaie</h3>
                    <div className="bg-mediumPurple w-full lg:h-[60%] xl:h-[45%] text-right text-ligthGreyText flex items-center rounded shadow-xl px-6 py-5">
                    <p className="text-sm">Ce site permet aux utilisateur de voir le top 100 crypto monnaie actualisé à chaque chargement de la page. Il est aussi possible de convertir ses crypto monnaie entre elle.</p>
                    </div>
                    <ul className="flex space-x-4 text-greyText xl:text-base text-sm">
                        <li>NextJS</li>
                        <li>PostgresSQL</li>
                        <li>Tailwind</li>
                        <li>CMCAPI</li>
                        <li>ChartJS</li>
                    </ul>
                    <div className="mt-2 space-x-4 text-lg">
                        <FontAwesomeIcon icon={faGithub} />
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </div>
                </div>
            </div>

        </div>

        <div className={`${projectState !== 3 ? "hidden" : 'block'} flex`}  id="1">

            <div className="w-[70%] 2xl:h-full h-full relative group z-10 flex items-center">
                <div className="relative group">
                    <div className={`w-full h-full bg-mediumPurple absolute top-0 l-0 opacity-40 group-hover:opacity-0 z-[50]`}></div>
                    <img src={irealMindProject} alt="spotify clone illustration" className="w-full h-full rounded z-[10]  object-cover block shadow"/>
                </div>
            </div>
            
            <div className="w-[50%] h-[70%] absolute right-0 z-20 flex items-end">
                <div className="w-full h-[70%] flex flex-col items-end text-white space-y-6">
                    <h3 className="text-lightPurple text-lg font-semibold tracking-wide">Site de E-commerce</h3>
                    <div className="bg-mediumPurple w-full lg:h-[60%] xl:h-[45%] text-right text-ligthGreyText flex items-center rounded shadow-xl px-6 py-5 ">
                    <p className="text-sm">Sur ce site il est possible de voir les différents produits, se connecter, ajouter un article à son panier... Un <strong className="text-lightPurple">système admin</strong> est présent il est possible de voir les stats du site (vente, CA...) ainsi que <strong className="text-lightPurple">gérer</strong> les produits</p>
                    </div>
                    <ul className="flex space-x-4 text-greyText xl:text-base text-sm">
                        <li>NextJS</li>
                        <li>PostgresSQL</li>
                        <li>Tailwind</li>
                        <li>StripeAPI</li>
                        <li>ChartJS</li>
                    </ul>
                    <div className="mt-2 space-x-4 text-lg">
                        <FontAwesomeIcon icon={faGithub} />
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </div>
                </div>
            </div>

        </div>
        
    </React.Fragment>
    )
}