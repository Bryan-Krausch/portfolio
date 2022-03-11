import contactBackground from '../../img/contactBackground.jpg'

export default function ModalContact(){
    return(
        <div className="absolute h-screen w-screen bg-white z-[999] flex overflow-y-hidden">
            <div className="w-[50%] h-full relative">
                <div className="absolute h-full w-full bg-black opacity-60"></div>
                <img src={contactBackground} alt="contact_left" className='bg-contain h-full w-full'/>
            </div>

            <div className="w-[50%] h-full bg-white flex flex-col items-center justify-center">
                <div className="h-[80%] w-full px-10 space-y-10">
                    <h3 className='tracking-wide h-[10%]'>Si vous avez une question n'hésiter pas à me contacter en remplissant ce formulaire.</h3>
                    <div className='space-y-4 h-[90%]'>
                        <div>
                            <input className="text-ligthGreyText py-4 border-b-[2px] border-slate-200 w-full  text-black" placeholder='Nom'/>
                        </div>

                        <div>
                            <input className="text-ligthGreyText py-4 border-b-[2px] border-slate-200 w-full text-black" placeholder='Email'/>
                        </div>

                        <div>
                            <input className="text-ligthGreyText py-6 border-b-[2px] border-slate-200 w-full text-black" placeholder='Message'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}