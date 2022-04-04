import contactBackground from '../../img/contactBackground.jpg'
import ContactFormItem from './ContactFormItem'
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitter, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

export default function ModalContact({setIsOpenContactModal, isOpenContactModal}){
    return(
        <div className={`absolute h-full w-full bg-white z-[999] flex ${isOpenContactModal ? "block" :"hidden"}`}>
            <div className="absolute top-4 right-8">
                <button>
                    <FontAwesomeIcon icon={faXmark} className="text-black text-3xl relative cursor-pointer"  onClick={() => {setIsOpenContactModal(false)}} />
                </button>
            </div>
            
            {/* Left */}
            <div className="w-[50%] h-full relative lg:block hidden">
                <div className='z-[500] absolute left-2/4 transform -translate-x-2/4 text-white text-[3em] font-bold uppercase tracking-widest top-[10%] text-center'>Formulaire de Contact</div>
                <div className="absolute h-full w-full bg-black opacity-60"></div>
                <img src={contactBackground} alt="contact_left" className='bg-contain h-full w-full'/>
            </div>

            {/* Right */}
            <div className="w-full lg:w-[50%] h-full bg-white flex flex-col items-center justify-center">
                <div className="h-[80%] w-full px-10 space-y-10">

                    <h3 className='tracking-wide lg:h-[10%] h-[20%]'>Si vous avez une question n'hésiter pas à me contacter en remplissant ce formulaire.</h3>
                    <div className='space-y-4 h-[90%]'>

                        <ContactFormItem field="Nom"/>
                        <ContactFormItem field="Email"/>
                        <div className="relative">
                            <input type="text" className="text-ligthGreyText py-6 border-b-[2px] border-slate-200 w-full  text-black peer focus:mt-6" placeholder="Message"/>
                            <div className="text-black absolute top-0 hidden transform translate-y-2 peer-focus:-translate-y-2 peer-focus:flex ">Message</div>
                        </div>
                    </div>
                </div>
                <div className='absolute bottom-20 '>
                    <button className="border-[2px] border-ligthGreyText p-4 text-sm rounded">
                        Envoyez le formulaire
                    </button>
                </div>
                <div className='absolute right-0 bottom-0 flex flex-row-reverse items-center space-x-2 text-greyText pb-1'>
                    <p className='px-2'>contact.krausch@yahoo.com</p>
                    <a href="https://www.linkedin.com/in/bryan-krausch-67182a236/" target='new'>
                        <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
                    </a>
                    <a href="https://github.com/Bryan-Krausch/">
                        <FontAwesomeIcon icon={faGithub} className="text-xl" target='new' />
                    </a>
                </div>
            </div>

        </div>
    )
}