export default function TechnologiesContent({selected}){
    return (
        <div className="h-full w-[80%]">
            <div id="1" className={`pl-8 ${selected !== 1 && 'hidden'}`}>
                <ol className="text-lightPurple text-lg 2xl:text-xl space-y-4 list-disc">
                    <li><div className="text-white">Javascript ES13</div></li>
                    <li><div className="text-white">HTML CSS</div></li>
                    <li><div className="text-white">PHP</div></li>
                    <li><div className="text-white">MySQL, PostgreSQL</div></li>
                    <li><div className="text-white">SOLIDITY</div></li>
                    <li><div className="text-white">C#</div></li>
                </ol>
            </div>
            <div id="2" className={`${selected !== 2 && 'hidden'} pl-8`}>
                <ol className="text-lightPurple text-lg 2xl:text-xl space-y-4 list-disc">
                    <li><div className="text-white">Single Page Framework : React</div></li>
                    <li><div className="text-white">Framework React : NextJS, Redux, Atom, Material UI</div></li>
                    <li><div className="text-white">Framework PHP : Symfony</div></li>
                    <li><div className="text-white">Framework CSS : Bootstrap, Tailwind</div></li>
                    <li><div className="text-white">Responsive Design</div></li>
                    <li><div className="text-white">API</div></li>
                    <li><div className="text-white">Ajax</div></li>
                </ol>
            </div>
            <div id="3" className={`${selected !== 3 && 'hidden'} pl-8`}>
                <ol className="text-lightPurple text-lg 2xl:text-xl space-y-4 list-disc">
                    <li><div className="text-white">Protection contre les injections SQL</div></li>
                    <li><div className="text-white">Protection de données</div></li>
                    <li><div className="text-white">Protection contre les différentes failles de sécurité</div></li>
                    <li><div className="text-white">Connaissance des cyberattaque les plus connues </div></li>
                </ol>
            </div>
            <div id="4" className={`${selected !== 4 && 'hidden'} pl-8`}>
                <ol className="text-lightPurple text-lg 2xl:text-xl space-y-4 list-disc">
                    <li><div className="text-white">Visual Studio / Visual Studio Code</div></li>
                    <li><div className="text-white">Connaissance de base de réseaux</div></li>
                    <li><div className="text-white">Connaissance sur la réparation informatique</div></li>
                </ol>
            </div>
        </div>
    )
}