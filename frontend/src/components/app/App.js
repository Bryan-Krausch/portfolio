import About from '../about/About';
import First from '../first/First'
import Header from '../header/Header';
import ModalMenu from '../header/ModalMenu';
import React, { useState, useEffect } from 'react';
import ModalContact from '../contact/ModalContact';
import Timeline from '../timeline/Timeline';


function App() {
  const [isLoad, setIsLoad] = useState(false)
  const [blur, setBlur] = useState('')

  const [isOpenMenuModal, setIsOpenMenuModal] = useState(false)
  const [isOpenContactModal, setIsOpenContactModal] = useState(false)

  const [transition, setTransition] = useState('opacity-1')
  const [startTransition1, setStartTransition1] = useState('left-[-100vw]')
  const [startTransition2, setStartTransition2] = useState('left-[-100vw]')
  const [startTransition3, setStartTransition3] = useState('left-[-100vw]')

  const [diapo, setDiapo] = useState(1)
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoad(true)
    }, 1000)
  })

  useEffect(() => {
    if(isOpenMenuModal === true || isOpenContactModal === true){
      setBlur('blur')
    }else{
      setBlur('')
    }
  }, [isOpenMenuModal, isOpenContactModal])

  console.log(diapo);

  return (
    <div className="App w-[full] overflow-x-hidden bg-darkPurple">
      {isLoad ? 
      <div>
        
        {/* Transition
        <div id='transition' className={`${transition}`}>
          <div className={`bg-purple-800 transition-all ${startTransition1} ease-in-out duration-300`} style={styleTransition}></div>
          <div className={`bg-darkPurple transition-all ${startTransition2} ease-in-out  duration-300`} style={styleTransition}></div>
          <div className={`bg-black transition-all ${startTransition3} ease-in-out duration-300 opacity-50`} style={styleTransition}></div>
        </div> */}

        {/* Modal Menu et Modal Contact */}
        <ModalMenu isOpenMenuModal={isOpenMenuModal} setIsOpenMenuModal={setIsOpenMenuModal} />
        {isOpenContactModal && <ModalContact setIsOpenContactModal={setIsOpenContactModal}/>}


        
        <div className={`w-[93%] h-full mx-auto ${blur} overflow-y-hidden`}>  
          <Header isOpenMenuModal={isOpenMenuModal} setIsOpenMenuModal={setIsOpenMenuModal} setDiapo={setDiapo} setIsOpenContactModal={setIsOpenContactModal}/>

          {/* Content */}
          <main className={`h-screen w-screen overflow-y-hidden xl:px-[200px] lg:px-[100px] md:px-[80px] sm:px-[60px] px-4 w-full mx-auto ${(isOpenMenuModal || isOpenContactModal ) && "blur-sm lg:blur-none"}`}>
            <div className={`transition-all ease-in-out duration-1000 block ${diapo === 1 ? 'opacity-100' : 'opacity-0 hidden'}`}><First /></div>
            <div className={`transition-all ease-in-out duration-1000 block ${diapo === 2 ? 'opacity-100' : 'opacity-0 hidden'}`}><About /></div>
          </main>

          <Timeline diapo={diapo}/>
        </div>
      </div>

      :
              
      <div className='h-screen w-screen bg-darkPurple'>
          {/* Loading */}
        
      </div>
      }
    </div>
    );
}

const styleTransition = {
  position: 'fixed',
  height: '100vh',
  width: '100vw',
  top: '0',
  zIndex: '1000'
}


export default App;
