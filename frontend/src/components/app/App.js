import About from '../about/About';
import First from '../first/First'
import Technologies from '../technologies/Technologies';
import Header from '../header/Header';
import ModalMenu from '../header/ModalMenu';
import React, { useState, useEffect } from 'react';
import ModalContact from '../contact/ModalContact';
import Timeline from '../timeline/Timeline';
import Projets from '../projets/Projets';


function App() {
  const [isLoad, setIsLoad] = useState(false)
  const [blur, setBlur] = useState('')

  const [isOpenMenuModal, setIsOpenMenuModal] = useState(false)
  const [isOpenContactModal, setIsOpenContactModal] = useState(false)

  const [diapo, setDiapo] = useState(1)
  const [isOpenPdf, setIsOpenPDF] = useState(false)
  
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
    <div className="App w-screen h-screen overflow-x-hidden overflow-y-hidden bg-darkPurple antialiased">
      {isLoad ? 
      <div>
        {/* Modal Menu et Modal Contact */}
        <ModalMenu isOpenMenuModal={isOpenMenuModal} setIsOpenMenuModal={setIsOpenMenuModal} setDiapo={setDiapo} />
        <ModalContact setIsOpenContactModal={setIsOpenContactModal} isOpenContactModal={isOpenContactModal}/>


        
        <div className={`w-full h-screen ${blur} overflow-hidden ${isOpenContactModal ? "hidden" : 'flex-col'}`}>  
          <Header isOpenMenuModal={isOpenMenuModal} setIsOpenMenuModal={setIsOpenMenuModal} setDiapo={setDiapo} setIsOpenContactModal={setIsOpenContactModal} setIsOpenPDF={setIsOpenPDF}/>

          {/* Content */}
          <main className={` h-screen w-full overflow-y-hidden overflow-x-hidden flex flex-col xl:px-[150px] lg:px-[150px] md:px-[50px] sm:px-[100px] px-[25px] mx-auto max-w-[1600px] xl:max-w-[2400px]
          ${(isOpenMenuModal || isOpenContactModal ) && "blur-sm lg:blur-none"}`}>
            <div className={`${diapo !== 1 ? 'hidden' : 'block'} w-full max-w-[1000px] mx-auto mt-[100px]`}><First setDiapo={setDiapo} setIsOpenPDF={setIsOpenPDF} isOpenPdf={isOpenPdf}/></div>
            <div className={`${diapo !== 2 ? 'hidden' : 'block'} h-full w-full max-w-[1100px] xl:max-w-[2400px] mx-auto overflow-y-scroll lg:overflow-hidden mt-[100px]`}><About diapo={diapo}/></div>
            <div className={`${diapo !== 3 ? 'hidden' : "block"} h-full w-full max-w-[1100px] xl:max-w-[2400px] mx-auto overflow-y-scroll lg:overflow-hidden mt-[100px]`}><Technologies /></div>
            <div className={`${diapo !== 4 ? 'hidden' : 'block'} h-full w-full max-w-[1100px] xl:max-w-[2400px] mx-auto  overflow-y-hidden lg:overflow-hidden `}><Projets /></div>
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



export default App;
