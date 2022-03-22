import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fabrice from '../../img/fabrice.jpg'

export default function About({diapo}){
    return(
        <section className={`h-full mx-auto w-full flex flex-col lg:justify-center items-start lg:items-start lg:-mt-[100px]`}>
            <div className="max-w-[1100px] lg:flex lg:flex-col lg:justify-center h-full mx-auto overflow-y-scroll md:overflow-y-hidden relative">

                <div className="h-[4%] w-[90%] lg:w-[60%] text-white text-xl flex items-center overflow-x-hidden lg:overflow-y-hidden space-x-4 relative mb-[20px] opacity-0 animate-revealPresentationText animation-delay-500 ">
                    <FontAwesomeIcon icon={faUser} className='text-base text-lightPurple '/>
                    <h1 className="relative block ">Présentation</h1>
                    <hr className="ml-10 h-[1px] w-full lg:w-[400px] border-none bg-greyText"/>
                </div>
  
                <div className="w-full flex flex-col lg:flex-row justify-start items-center lg:items-start lg:overflow-hidden lg:space-y-0 lg:space-x-[50px] px-6 relative ">

                    <div className="text-sm w-full md:text-base lg:text-lg lg:w-[60%] lg:h-full text-greyText lg:pr-10 space-y-4 md:space-y-6 lg:space-y-8 animate-revealPresentationText animation-delay-500 opacity-0">
                        <div className="absolute top-0 left-0 w-full h-full bg-darkPurple -z-[1]"></div>
                        <p className="leading-6 md:leading-8 lg:leading-10 ">Bonjour, je m'appelle <strong className="text-lightPurple">Krausch Bryan</strong> j'ai 20 ans. J'ai commencé le développement en 2018 cela fais maintenant <strong className="text-lightPurple">quatre ans que je développe</strong> divers choses.
                        J'ai d'abord commencé d'apprendre le développement par moi même puis j'ai continué avec les études. Je suis actuellement en deuxième année de <strong className="text-lightPurple">BTS SIO option SLAM</strong>.
                        </p>
                         <p className="leading-6 md:leading-8 lg:leading-10">Dans le cadre de mes études j'ai effectué <strong className="text-lightPurple">deux stage</strong>. Le premier étais la création d'une boutique en ligne via le <strong className="text-lightPurple">CMS Shopify</strong>.
                         La tache de me second stage étais la création d'un site de ecommerce j'ai utilisé <strong className="text-lightPurple">Next js</strong> et <strong className="text-lightPurple">tailwind</strong> pour crée ce site web.
                         </p>
                       
                    </div>

                    <div className="w-[70%] lg:w-[30%] mx-auto pt-[30px] max-w-[300px]  relative pb-10">
                        <div className=' relative opacity-0 lg:before:absolute lg:before:top-[20px] lg:before:left-[20px] lg:before:border-[2px] lg:before:rounded lg:before:border-lightPurple lg:before:z-[1] lg:before:block lg:before:w-full lg:before:h-full animate-revealPrensentaionImage animation-delay-1000'> 
                            <div className="absolute top-0 left-0 bg-gradient-to-t from-black to-white w-full h-full z-[3] opacity-10"></div>
                            <img className="w-full z-[2] rounded absolute left-2/4 transform -translate-x-2/4 lg:relative " src={fabrice} alt="moi" />
                        </div>
                    </div>

                </div>


            </div>
        </section>
    )
}   