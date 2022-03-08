export default function First(){
    return(
        <div className="h-screen mx-auto flex items-center">
            <div className="h-[63%] lg:h-[50%] w-full relative">
                <div className="text-lightPurple text-base lg:text-base font-thin tracking-widest mt-3 lg:mt-0">Bonjour, je m'appelle,</div>
                <div className="text-ligthGreyText text-[33px] lg:text-[70px] font-semibold lg:font-bold pt-2 lg:pt-0 tracking-wide">Krausch Bryan.</div>
                <div className="text-slateGreyText lg:-mt-3 text-[20px] lg:text-[50px] font-semibold tracking-wide pt-2 lg:pt-0">Etudiant en informatique BTS SIO.</div>
                <div className="text-slate-500 text-sm pt-8 lg:pt-0 lg:text-base font-thin tracking-wide lg:w-[45%] w-full leading-6">
                    Je suis un développeur spécialisé dans le <strong className="text-lightPurple">développement web</strong>. Je suis actuellement dans mes études pendant encore 2 ans je suis donc ouvert à <strong className="text-lightPurple">aucune</strong> offre d'emploi pour le moment.  
                </div>

            </div>
                <div className="absolute bottom-16 left-2/4 transform -translate-x-2/4 lg:-translate-x-4 ">
                    <button className="border-lightPurple border-2 hover:bg-lightPurple hover:bg-opacity-10 text-lightPurple px-4 py-2   lg:p-4 ">
                        Voir la suite
                    </button>
                </div>
        </div>
    )
}