export default function ModalMenu(isOpenMenuModal) {


    return(
        <div>
        {isOpenMenuModal &&
            <div className={`z-50 absolute w-screen h-screen flex`}>
                <div className="w-[30%] md:w-[40%] h-full blur-xl">
                    
                </div>
    
                <div className="w-[70%] md:w-[60%] h-full bg-red-500 ">
    
                </div>
            </div>
        }
        </div>
    )
}